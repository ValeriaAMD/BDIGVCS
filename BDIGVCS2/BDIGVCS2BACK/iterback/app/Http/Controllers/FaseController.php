<?php

namespace App\Http\Controllers;

use App\Models\Fase;
use Illuminate\Http\Request;

class FaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fas = Fase::all();
        return response()->json($fas,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showfas = Fase::find($id);
        return response()->json($showfas,200);
    }

}
