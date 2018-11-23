<?php
	session_start();
	unset( $_SESSION['user'] );

?><!DOCTYPE html>
<html ng-app="loginApp" ng-controller="mainCtrl">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Facturación | Log in</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    
    <!-- Theme style -->
    <link rel="stylesheet" href="AdminLTE.min.css">
    

	<script src="angular/lib/angular.min.js"></script>
	<script src="angular/app.js"></script>
	<script src="angular/servicios/login_service.js"></script>

  </head>

  <body class="hold-transition login-page">

    <div class="login-box">
      <div class="login-logo">
        
        <a href=""><b>Facturación</b>FAC</a>

      </div><!-- /.login-logo -->


      <div class="login-box-body">

        <p class="login-box-msg">Ingrese su usurio</p>

        <form name="forma" ng-submit=" ingresar( datos ) ">

          <div class="form-group has-feedback">
            
            <input type="text" 
            	   class="form-control" 
            	   placeholder="Usuario"
            	   name="usuario"
            	   required="required"
            	   ng-model="datos.usuario">

            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>

          <div class="form-group has-feedback">
            <input type="password" 
                   class="form-control" 
                   placeholder="Contraseña"
                   name="contrasena"
                   required="required"
            	   ng-model="datos.contrasena">

            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>

          <div class="row">
            <div class="col-xs-12">
              <button type="submit" 
              		  class="btn btn-primary btn-block btn-flat"
              		  ng-disabled="forma.$invalid || cargando">Ingresar</button>
            </div><!-- /.col -->
          </div>


		<div class="row" ng-show="invalido">
			<div class="col-md-12">
				<br>
				<div class="alert alert-danger">
					<strong>Verificar!</strong>
					{{ mensaje }}
				</div>
			</div>
		</div>
=======
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Facturación | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

  <!-- Bootstrap 3.3.5 -->
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="AdminLTE.min.css">

  <!--- Está usando un AngularJS 1.5 --->
  <script src="angular/lib/angular.min.js"></script>
  <script src="angular/app.js"></script>
  <script src="angular/servicios/login_service.js"></script>

</head>

<body class="hold-transition login-page">

  <div class="login-box">
    <div class="login-logo">

    </div><!-- /.login-logo -->


    <div class="login-box-body">
      <center>
        <img src="img/logos.gif">
      </center>
      <p class="login-box-msg">Ingrese Su Usuario</p>

      <form name="forma" ng-submit=" ingresar( datos ) ">
<!--
3) Solo con ponerle un nombre al formulario, ya nos podemos referir en forma de variable al objeto que genera dentro (con sus atributos y demás).
-->
        <div class="form-group has-feedback">

          <input type="text" 
          class="form-control" 
          placeholder="Usuario"
          name="usuario"
          required="required"
          ng-model="datos.usuario">

<!--
5) A esta entrada se le ponen diferentes condiciones -reglas de validación- y se decide que se debe guardar como datos.usuario (eso viene fijado en el ng-model, ya que así crea la variable en el controlador para que podamos utilizarla).
6) El name se usa para poder utilizarlo de forma interna.
-->

          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>

        <div class="form-group has-feedback">
          <input type="password" 
          class="form-control" 
          placeholder="Contraseña"
          name="contrasena"
          required="required"
          ng-model="datos.contrasena">

          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <button type="submit" 
            class="btn btn-success btn-block btn-flat"
            ng-disabled="forma.$invalid || cargando">Ingresar</button>
          </div><!-- /.col -->
        </div>
<!--
7) El ng-disabled es parecido al ng-hide y al ng-show. Deja el campo habilidado o deshabilitado en función de un valor true o false que se reciba en la expresión que se está utilizando. En este caso, el botón se quedará invalidado mientras el formulario no sea válido o si está la variable cargando a true.
-->

        <div class="row" ng-show="invalido">
          <div class="col-md-12">
            <br>
            <div class="alert alert-danger">
              <strong>¡Verificar!</strong>
              {{ mensaje }}
            </div>
          </div>
        </div>



        </form>


      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->

<!--
8) Aquí lo que se hace es mostrar, o no, un mensaje al usuario. Ese mensaje aparece siempre que se haya decidido que el formulario esté mal validado (eso se maneja con la directiva ng-show). La variable se está controlando desde el controlador que hay en app.js.
-->
  </body>
</html>
