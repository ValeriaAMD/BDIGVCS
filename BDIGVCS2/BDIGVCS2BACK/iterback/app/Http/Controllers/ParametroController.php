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
    public function index(Request $request)
    {
        // Obtener las fechas proporcionadas por el usuario desde la solicitud
        $fechaInicio = $request->input('fecha_inicio');
        $fechaFin = $request->input('fecha_fin');

        // Filtrar los datos por el rango de fechas especificado
        $parametros = Parametro::whereBetween('dia', [$fechaInicio, $fechaFin])->get();

        // Retornar los datos filtrados
        return response()->json($parametros);
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
