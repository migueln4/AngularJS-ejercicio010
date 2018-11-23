var app = angular.module('facturacionApp.facturasCrtl', []);

app.controller('facturaCtrl', ['$scope', 'Clientes','Factura', function($scope, Clientes, Factura){
	
	$scope.cliente = {};
	$scope.buscar = 1;
	$scope.agregar = {
		producto_id: "",
		cantidad:1
	};

	$scope.factura = Factura;
	$scope.factura.ISV = $scope.config.ISV;

	$scope.hoy = new Date();

	
	$scope.buscarCliente = function(buscar){//Esto recibe un término para buscar

		$scope.clientes = {};//Aquí están todos los clientes gaurdados

		Clientes.buscar(buscar).then(function(){//Llamo al servicio de los clientes.
//Lo que se utiliza para generar la factura es el cliente. Se genera a partir de él.
			
			if( isNaN( buscar ) ){//Si lo que se le ha pasado es un número
				$("#modal_buscar_cliente").modal();//Esto hace referencia a un id de HTML.
				$scope.clientes = Clientes.clientes;

			}else{//Aquí entra porque se detecta un número y se busca directamente por id
				$scope.cliente = Clientes.clientes[0];
			}
		});
	}


	$scope.cliente_sel = function(cliente){
		
		$("#modal_buscar_cliente").modal('hide');
		$scope.cliente = cliente;

	}

	$scope.actualizar = function(){
		Factura.recalcular();
	}

	$scope.buscarProducto = function( producto ){

		if( producto.producto_id == "" ){
			return;
		}

		Factura.buscar_producto( producto.producto_id )
			.then(function( producto ){

				Factura.agregar_detalle( producto );

				$scope.agregar.producto_id = "";
				$scope.agregar.cantidad = 1;

			});
		
	}

	$scope.guardar_factura = function(){

		Factura.cliente_id = $scope.cliente.id;
		Factura.guardar_factura();

	}

	$scope.borrar_detalle = function( item ){

		Factura.borrar_detalle( item );

	}

	$scope.cancelar_orden = function(){

		swal({   
			title: "Estas seguro?",   
			text: "Seguro que desea cancelar la orden?",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Si",   
			cancelButtonText: "No, cancelar!!!",   
			closeOnConfirm: true,
			closeOnCancel: true 
		}, function(isConfirm){   

			if (isConfirm) {     
				
				$scope.cliente = {};
				Factura.nueva_factura();
				$scope.$apply();
			}

		});

	}


}]);