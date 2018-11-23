var app = angular.module('facturacionApp.notificaciones',[]);


app.factory('Notificaciones', ['$http', '$q', function($http, $q){

	var self = {//Siemrpe que se hace un factory, hay que recordar que se tiene que devolver algo, como ocurre aquí con el self. Esto funciona como un objeto, que tiene diferentes atributos (normales o arrays) y funciones.

		notificaciones:[{
			icono:"fa-user", //Esta es la clase que se le tiene que poner al icono. Se sigue la lógica de JavaScript, que se pueden añadir datos al HTML de acuerdo con la situación o funcionalidad que se haya planteado.
			notificacion: "Nuevo usuario registrado"
		},
		{
			icono:"fa-save",
			notificacion: "Se esta utilizando el 50 % de disco duro."
		}]

	};


	return self;


}]);