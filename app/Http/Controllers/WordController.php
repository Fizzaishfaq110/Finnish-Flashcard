<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Word;

class WordController extends Controller
{
    public function saveWord(Request $request)
    {
        // Validate the request data (you can adjust this based on your needs)
        $request->validate([
            'finnish' => 'required|string',
            'english' => 'required|string',
            'example' => 'nullable|string',
        ]);

        // Create a new Word record
        $word = new Word();
        $word->finnish = $request->input('finnish');
        $word->english = $request->input('english');
        $word->example = $request->input('example');
        $word->save();

        // Return a success response
        return response()->json(['message' => 'Word saved to favorites!']);
    }
}