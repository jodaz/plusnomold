<?php

namespace Tests\Unit;

use Tests\TestCase;

class PayrollTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testGetPayrolls()
    {
        $response = $this->get('/api/payrolls');

        $response->assertStatus(200);
    }

}
