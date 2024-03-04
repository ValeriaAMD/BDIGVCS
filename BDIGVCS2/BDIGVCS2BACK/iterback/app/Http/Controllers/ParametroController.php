<?php

namespace App\Http\Controllers;

use App\Models\Parametro;
use Illuminate\Http\Request;

// por el momento solo estan los controladores para mostrar todo 
// y para mostrar por una fase en especifico

class ParametroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $param = Parametro::all();
        return response()->json($param,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showparam = Parametro::find($id);
        return response()->json($showparam,200);
    }

}
