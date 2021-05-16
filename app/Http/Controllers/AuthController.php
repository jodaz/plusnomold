<?php

namespace App\Http\Controllers;

use Hash;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        return $request->all();
    }

    public function login(LoginRequest $request)
    {
        // Check email
        $user = User::where('document', $request->document)->first();

        // Check password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Credenciales inválidas'
            ], 401);
        }

        $token = $user->createToken(Str::random(20))->plainTextToken;

        // Create sessions
        $user->sessions()->create();

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function authenticate(Request $request)
    {
        $token = $request->user()->createToken(Str::random(20));

        return response()->json([
            'token' => $token->plainTextToken
        ], 201);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        // Revoke token
        $user->tokens()->delete();

        // Save logging out
        $user->sessions()->create([
            'active' => 0,
        ]);

        return response()->json([
            'message' => 'Logged out!'
        ], 200);
    }
}
