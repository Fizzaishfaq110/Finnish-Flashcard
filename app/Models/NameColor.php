<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NameColor extends Model
{
    protected $fillable = ['name', 'color']; //allows mass assignment for name and color

}
