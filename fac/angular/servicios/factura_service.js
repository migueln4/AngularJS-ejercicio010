var app = angular.module('facturacionApp.factura',[]);
//Aquí está toda la lógica para generar la factura.

app.factory('Factura', ['$http', '$q', function($http, $q){

	var self = {
//De aquí hacia abajo, toda la inicialización de la variable.
		numero_factura: undefined,
		fecha_solicitado: new Date(),
		estado: 'E',
		monto: 0,
		monto_neto: 0,
		impuesto: 0,
		ISV: 0,
		comentario: undefined,
		cliente_id: undefined,
		comentario: undefined,
		detalle: [],//Aquí es donde se van metiendo los artículos que se añaden en el frontal
		
		nueva_factura: function(){//Resetea todos los datos cada vez que se genera una nueva factura

			self.numero_factura = undefined;
			self.fecha_solicitado = new Date();
			self.estado = 'E';
			self.comentario = undefined;
			self.cliente_id = undefined;
			self.detalle = [];

		},

		recalcular: function(){

			// Calcular los montos
			self.monto = 0;

			for (item of self.detalle) {
			  	self.monto += item.precio_venta * item.cantidad;
			}

			self.impuesto   = self.monto * self.ISV;
			self.monto_neto = self.monto + self.impuesto;

		},

		agregar_detalle: function( agregar ){

			self.detalle.push( agregar );

			self.recalcular();

		},

		buscar_producto: function( id ){

			var d = $q.defer();

			$http.get('php/productos/get.producto.php?id=' + id)
				.success( function( respuesta ){
					
					respuesta.producto.cantidad = 1;
					d.resolve( respuesta.producto );

				});

			return d.promise;
		},

		borrar_detalle: function( item ){

			var index = self.detalle.indexOf(item);
  			self.detalle.splice(index, 1);  

  			self.recalcular();
		},

		guardar_factura: function(){

			console.log(self.detalle);

			$http.post('php/facturas/post.guardarfactura.php',self)
				.success(function(respuesta){

					console.log(respuesta);

				});


			return true;

		}
	};

	return self;

}]);