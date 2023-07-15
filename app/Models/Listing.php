<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'slug', 'description', 'date_online', 'date_offline', 'price', 'currency', 'category', 'image', 'first_name', 'last_name', 'email', 'mobile'];
}
