<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    protected $levels = ['Contratado', 'Fijo', 'Comisión de servicios'];

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'document' => $this->faker->numerify('#######'),
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'professionalization_level' => $this->levels[array_rand($this->levels)],
            'admission_date' => $this->faker->date('Y-m-d', 'now')
        ];
    }
}
