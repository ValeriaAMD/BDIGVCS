<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ValuesController extends Controller
{
    public function update(Request $request)
    {
        // Obtener los nuevos valores de temperatura y humedad desde la solicitud
        $tempmax = $request->input('tempmax');
        $hummax = $request->input('hummax');

        // Enviar los nuevos valores al script de Python
        $response = Http::post('http://localhost:5000/update-settings', [
            'tempmax' => $tempmax,
            'hummax' => $hummax
        ]);

        if ($response->successful()) {
            // Manejar la respuesta exitosa
            return response()->json(['message' => 'Settings updated successfully']);
        } else {
            // Manejar el error
            return response()->json(['message' => 'Failed to update settings'], 500);
        }
    }
}
