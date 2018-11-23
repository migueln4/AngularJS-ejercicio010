var app = angular.module('facturacionApp.configuracion',[]);
// 6) En este archivo se va a controlar que se pueda cargar el archivo de configuración .json que se ha hecho expresamente para introducir toda la información que tiene.

app.factory('Configuracion', ['$http', '$q', function($http, $q){
// 9) Esta lectura se hace con promesas y peticiones HTTP.

	var self = {

		config:{}, //De primeras, no tiene nada porque hay que leer el archivo .json
		cargar: function(){

			var d = $q.defer();

			$http.get('configuracion.json')
				.success(function(data){

					self.config = data;
					d.resolve();


				})
				.error(function(){

					d.reject();
					console.error("No se pudo cargar el archivo de configuración");

				});

			return d.promise;
		}



	};


	return self;

}])