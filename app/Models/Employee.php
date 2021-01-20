<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'employees';

    protected $fillable = [
        'dni',
        'name',
        'lastname',
        'admission_date',
        'professionalization_level_id'
    ];

    public function profile()
    {
        return $this->belongsToMany(Profile::class);
    }

    public function professionalizationLevel()
    {
        return $this->belongsTo(ProfessionalizationLevel::class);
    }
}
