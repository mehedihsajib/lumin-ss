<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueFrontController extends Controller
{
    public function __invoke()
    {
        return view('Front.Layouts.app');
    }
}
