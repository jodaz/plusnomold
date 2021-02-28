<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    use HasFactory;

    protected $table = 'payrolls';

    protected $fillable = [
        'document',
        'total_earnings',
        'total_deductions',
        'total_amount'
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'document', 'document');
    }
}
