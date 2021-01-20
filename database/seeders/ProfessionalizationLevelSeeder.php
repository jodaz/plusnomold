<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProfessionalizationLevel;

class ProfessionalizationLevelSeeder extends Seeder
{
    protected $levels = ['Contratado', 'Fijo', 'Comisión de servicios'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->levels as $level) {
            ProfessionalizationLevel::create([
                'name' => $level
            ]);
        }
    }
}
