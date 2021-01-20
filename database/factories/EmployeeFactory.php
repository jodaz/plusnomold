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

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'dni' => $this->faker->nationalId(),
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'date_admission' => $this->faker->date('Y-m-d', 'now')
        ];
    }
}
