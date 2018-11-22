var app = angular.module('login.loginService',[]);
//Este es el servicio de login en AngularJS. No necesita ninguna dependencia.

//Lo importante es que en los servicios esté toda la lógica y los controladores sean lo más sencillos posibles.
app.factory('LoginService', ['$http','$q', function( $http, $q ){
//1) Se usa el servicio http porque se hace una petición a la base de datos
//2) Se utiliza q porque se va a trabajar con promesas.

	var self = {

		login: function( datos ){
//3) Dentro de "datos" vienen el usuario y su contraseña. Ojo, que no se ha considerado ningún cifrado de datos para la contraseña en esta parte. Todo eso se hace en la lógica de PHP.

			var d = $q.defer();

			$http.post('php/login/post.verificar.php', datos) //Esta es la llamada al php que es el que tiene todo el tema de la verificación de usuario-contraseña.
				 .success(function( data ){

				 	console.log( data );
				 	d.resolve( data );

				 });

		return d.promise; //Siempre que hay una promesa, debe devolverse.

		}

	};

	return self;

}])