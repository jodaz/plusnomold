<?php

namespace Tests\Unit;

use Tests\TestCase;

class EmployeeTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testGetEmployees()
    {
        $response = $this->get('/api/employees');

        $response->assertStatus(200);
    }

    public function testGetEmployeesWithQuery()
    {
        $response = $this->get('/api/employees?status=false');

        $response->assertStatus(200);
    }
}
