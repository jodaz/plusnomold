<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Payroll;

class Employee extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'employees';

    protected $fillable = [
        'document',
        'name',
        'lastname',
        'admission_date',
        'professionalization_level'
    ];

    public function payrolls()
    {
        return $this->hasMany(Payroll::class, 'document', 'document');
    }

    public function profile()
    {
        return $this->belongsToMany(Profile::class);
    }
}
