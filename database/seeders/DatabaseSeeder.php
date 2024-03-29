<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $inProd = App::environment('production');

        $this->call(AdminSeeder::class);
        $this->call(RolesAndPermissionsSeeder::class);

        if (!$inProd) {
            // Create more users
            $users = User::factory(10)->create();

            foreach($users as $user) {
                $user->syncRoles(2);
            }
            $this->call(TestSeeder::class);
        }
    }
}
