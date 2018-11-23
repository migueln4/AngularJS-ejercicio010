var app = angular.module( 'loginApp',['login.loginService']);

//Aquí es donde se forma todo lo que necesitamos para hacer el login.
app.controller('mainCtrl', ['$scope', 'LoginService', function( $scope, LoginService ){
	

	$scope.invalido = false;
	$scope.cargando = false;
	$scope.mensaje  = "";

	$scope.datos = {};

	$scope.ingresar = function( datos ){
//4) Esta es la función en la que se reciben los datos, que es un objeto en el que están tanto el usuario como la contraseña. Es importante declararlo por fuera de la función para que pueda luego apuntarse a él.

		if( datos.usuario.length < 3 ){//Este bloque if-else if son unas comprobaciones muy sencillas para comprobar que los datos que se introducen en el formulario son correctos, o no.
			$scope.invalido = true;
			$scope.mensaje  = 'Inserta tu usuario';
			return;

		}else if( datos.contrasena.length < 3 ) {
			$scope.invalido = true;
			$scope.mensaje  = 'Inserta tu contraseña';
			return;
		}

		$scope.invalido = false; //Se reinicia la bandera del inválido por si se ha quedado pillada en el caso anterior.
		$scope.cargando = true; //Aquí se alza esta bandera para reflejar que se va a comenzar la comprobación del usuario y contraseña usando la promesa.

		LoginService.login( datos ).then( function( data ){
//9) Aquí es donde se llama a la lógica exacta de cómo se comprueba el nombre de usuario y su contraseña. Ojo, que no se ha contemplado ningún tipo de cifrado.

			if( data.err ){

				$scope.invalido = true;
				$scope.cargando = false;//Esto no aparece fuera del if porque, si el login ha sido válido y devuelve que no ha habido errores, se hace la redirección automáticamente e impide que se pueda hacer una doble verificación mediante el bloqueo del botón.
				$scope.mensaje  = data.mensaje;
			}else{

				console.log( data.mensaje );
				window.location = data.url;

			}

		});


	}



}]);






