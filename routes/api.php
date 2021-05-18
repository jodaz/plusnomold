<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['permission:Administrador'])->group(function () {
        Route::apiResource('employees', 'EmployeeController');
        Route::apiResource('payrolls', 'PayrollController');
    });
    Route::get('employees/{employee}/proofs/download', 'EmployeeController@downloadProof');

    Route::get('revoke', 'AuthController@logout');
});

Route::post('authorize', 'AuthController@login');
Route::post('register', 'AuthController@register');
