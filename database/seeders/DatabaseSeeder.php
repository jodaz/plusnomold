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
            User::factory(10)->create();
            $this->call(TestSeeder::class);
        }
    }
}
