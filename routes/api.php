<?php
use App\Http\Controllers\Api\NameColorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\HTTP;
use App\Http\Controllers\WordController;
 
Route::apiResource('name-colors', NameColorController::class);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/proxy/finnish-words', function (Request $request) {
    $apiKey= env("FINNFAST_API_KEY");
    $response = Http::withHeaders([
        'x-api-key' => $apiKey,
    ])->get('https://finnfast.fi/api/words', [
        'limit' => 20,
        'page' => 1,
        'all' => false
    ]);
 
    return response()->json($response->json());
});
Route::post('/words', [WordController::class, 'saveWord']);