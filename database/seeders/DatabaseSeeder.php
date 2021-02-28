<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use App\Models\Employee;
use App\Models\Payroll;
use Carbon\Carbon;

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
           $employees = Employee::factory(100)->create();

           foreach($employees as $employee) {
               Payroll::create([
                    'document' => $employee->document,
                    'total_earnings' => 10000000.00,
                    'total_deductions' => 500000.00,
                    'total_amount' => 9500000.00,
                    'payment_date' => Carbon::now()
               ]);
           }
        }
    }
}
