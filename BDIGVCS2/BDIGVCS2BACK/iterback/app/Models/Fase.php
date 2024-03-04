<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fase extends Model
{
    use HasFactory;
    protected $table = 'Fase';
    protected $fillable = ['fase'];
    protected $hidden = ['created_at', 'updated_at'];

}
