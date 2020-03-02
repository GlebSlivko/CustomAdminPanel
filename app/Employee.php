<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';

    protected $fillable = [
        'item_id',
        'lang_id',
        'company_id',
        'first_name',
        'last_name',
        'email',
        'phone',

    ];
    protected $perPage = 10;

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id', 'item_id');
    }
}
