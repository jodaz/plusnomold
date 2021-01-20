<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use App\Models\Employee;

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
        // \App\Models\User::factory(10)->create();
        if (!$inProd) {
           $this->call(ProfessionalizationLevelSeeder::class);
           Employee::factory(10)->create();
        }
    }
}
