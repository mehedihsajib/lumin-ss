<?php
use App\Http\Controllers\VueAdminController;
use App\Http\Controllers\VueFrontController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/{any}', VueAdminController::class)->where('any', '.*');
Route::get('/{any}', VueFrontController::class)->where('any', '.*');

