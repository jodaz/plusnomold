<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'document' => 'required|unique:users|min:8',
            'email' => 'required|unique:users',
            'full_name' => 'required|max:35',
            'password' => 'required|min:8|confirmed',
        ];
    }

    public function messages()
    {
        return [
            'document.required' => 'Ingrese su número de cédula',
            'document.min' => 'La cédula de identidad debe tener 6 caracteres como mínimo',
            'document.unique' => 'La cédula ya ha sido registrada',
            'email.required' => 'Ingrese su correo electrónico',
            'email.unique' => 'El correo electrónico ya ha sido registrado',
            'full_name.required' => 'Ingrese su nombre completo',
            'full_name.max' => 'Solo se permiten 35 caracteres',
            'password.required' => 'Ingrese una contraseña',
            'password.confirmed' => 'Las contraseñas no coinciden',
            'password.min' => 'La contraseña debe tener 8 caracteres como mínimo',
        ];
    }
}
