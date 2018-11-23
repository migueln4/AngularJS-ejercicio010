var app = angular.module( 'facturacionApp',[ 
		'ngRoute', 'jcs-autoValidate',

		'facturacionApp.configuracion',
		'facturacionApp.mensajes',
		'facturacionApp.notificaciones',
		'facturacionApp.clientes',
		'facturacionApp.factura',
		'facturacionApp.dashboardCrtl',
		'facturacionApp.clientesCrtl',
		'facturacionApp.facturasCrtl'
		]);
// 7) Es muy importante que se vayan añadiendo en los corchetes las inyecciones de cada uno de los controladores que se vayan añadiendo a la aplicación.

angular.module('jcs-autoValidate')
.run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // To change the root resource file path
        defaultErrorMessageResolver.setI18nFileRootPath('angular/lib');
        defaultErrorMessageResolver.setCulture('es-co');
    }
]);
           


app.controller('mainCtrl', ['$scope', 'Configuracion','Mensajes', 'Notificaciones', function($scope, Configuracion,Mensajes, Notificaciones){
// 8) Hay que tener siempre en cuenta que hay que ir añadiendo aquí todoas las dependencias que se deben usar en el controlador.
// 10) Cuando todos los servicios se han cargado en el controlador principal, ya están disponibles desde cualquier parte del programa.
	
	$scope.config = {}; //De primeras, se crea el objeto sin nada. Una vez que se ha creado, se produce la llamada al servicio.
	$scope.mensajes = Mensajes.mensajes;
	$scope.notificaciones = Notificaciones.notificaciones;

	$scope.titulo    = "";
	$scope.subtitulo = "";



	$scope.usuario = {
		nombre:"Fernando Herrera"
	}


	Configuracion.cargar().then( function(){ //Aquí es donde se guarda la configuración que se ha creado mucho más arriba. Es en este momento cuando ya se ha cargado toda la información del archivo configuracion.json.
		$scope.config = Configuracion.config;
	});


	// ================================================
	//   Funciones Globales del Scope
	// ================================================
$scope.activar = function( menu, submenu, titulo, subtitulo ){ //Esta función lo que ahce es que le va dando el valor de "active" a la clase de cada uno de los elementos a los que se les está haciendo referencia. Para eso, se utiliza ng-class en todas las etiquetas que queremos personalizar con el "active".
//16) Cuando se llama desde cualquier controlador a esta función de activación, hay que pasarle siempre los cuatro atributos que se le han diseñado. Así se puede establecer, no solo la parte del menú que está activa, sino también el nombre del título y del subtítulo que aparecen en la parte de arriba de la web.

		$scope.titulo    = titulo; //Es recomendable que estas variables del scope se creen fuera de la función.
		$scope.subtitulo = subtitulo;

		$scope.mDashboard = "";
		$scope.mClientes  = "";

		$scope[menu] = 'active';

	};



}]);

// ================================================
//   Directivas
// ================================================
//Aquí se ha creado una directiva personalizada.
app.directive('enterKey', function () { //Así se hace una directiva nueva. Cuando se usa el camel case para la nomenclatura, en el código HTML se deben usar divididas con guiones. En este caso, esto sería así: enterKey en el archivo .js y enter-key="" para usarlo como directiva.
    return function (scope, element, attrs) { //Estos son los tres atributos que se reciben.
        element.bind("keydown keypress", function (event) {//Esto se ejecuta cuando se presiona una tecla y se maneja el evento que se debe producir.
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterKey);
                });

                event.preventDefault();
            }
        });
    };
});
//*De todas formas, directvas personalizadas ya hay muchas hechas en diferentes repositorios en Internet.
  

// ================================================
//   Rutas
// ================================================
app.config([ '$routeProvider', function($routeProvider){
// 3) Aquí es donde se configuran las rutas de cada uno de los archivos para que se apunte donde debería ir cada cosa.
// 4) Muchas veces, aunque el enrutador no se haya definido aún, ya se especifica el nombre que tendrá. Eso se irá desarrollando poco a poco a medida que se avanza en la aplicación.


	$routeProvider
		.when('/',{
			templateUrl: 'dashboard/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/facturas',{
			templateUrl: 'facturas/facturas.html', //No tiene controlador adrede.
			// controller: 'clientesCtrl'
		})
		.when('/facturanueva',{
			templateUrl: 'facturas/nueva_factura.html',
			controller: 'facturaCtrl'
		})
		.when('/clientes/:pag',{
			templateUrl: 'clientes/clientes.html',
			controller: 'clientesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

}]);


// ================================================
//   Filtros
// ================================================
app.filter( 'quitarletra', function(){
// 11) Tanto la parte de configuración, como la de enrutado, como esta de filtros, se pueden separar en archivos aparte e irlos incluyendo todos ellos en la página principal en el orden adecuado (el mismo que tienen aquí).

	return function(palabra){
		if( palabra ){
			if( palabra.length > 1)
				return palabra.substr(1);
			else
				return palabra;
		}
	}
})

.filter( 'mensajecorto', function(){ //Cada nuevo filtro que se vaya creando debe añadirse así, no hace falta volver a poner lo de app. porque son diferentes filtros que se van sumando al objeto en sí.

	return function(mensaje){ //Este filtro se encarga de añadir puntos suspensivos a una cadena que se corresponda con un mensaje. Aunque lo recomendable sería que, desde el servidor, se enviara un mensaje corto con unos 20 caracteres, aparte del cuerpo del mensaje completo. Eso sería como incluirlo como un campo más del json que se maneja en la parte de AngularJS.
		if( mensaje ){
			if( mensaje.length > 35)
				return mensaje.substr(0,35) + "...";
			else
				return mensaje;
		}
	}
})








