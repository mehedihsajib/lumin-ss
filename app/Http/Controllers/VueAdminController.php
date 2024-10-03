<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueAdminController extends Controller
{
    public function __invoke()
    {
        return view('Admin.Layouts.app');
    }
}
