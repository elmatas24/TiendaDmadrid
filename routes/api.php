use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/solicitud', function (Request $request) {
    return response()->json([
        'mensaje' => 'Solicitud recibida correctamente',
        'datos' => $request->all()
    ]);
});
