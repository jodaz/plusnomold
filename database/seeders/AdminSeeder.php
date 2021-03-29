<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'full_name' => config('app.admin_full_name'),
            'password' => bcrypt(config('app.admin_password')),
            'email' => config('app.admin_email'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);
        $admin->syncRoles(Role::find(1));
    }
}
