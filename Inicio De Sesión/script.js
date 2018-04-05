
var myweb = angular.module ("myweb", []);
myweb.controller("Login", function ($scope){
	//funcion Inicio de sesion
	$scope.nombre = "David"
	$scope.contrasena = "hola"
	


	$scope.Inicio =function(a,b){
		if (a == $scope.nombre && b == $scope.contrasena) {
			window.open("https://clashroyale.com/es","_parent") 
		} else {
					swal("Usuario incorrecto o contraseña incorrecto")
				}
		}




});

