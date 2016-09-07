/**
 * Created by Lais on 03/09/2016.
 */


angular.module("folhaPagamento").controller("loginController",function($scope, $window){
     $scope.login = [];


    $scope.efetuarLogin=function(login){
            alert(login.usuario);
        loginServices.loga(login).success(function(data){
            delete $scope.login;
            $scope.loginForm.$setPristine();
        }).error(function (data) {
            $scope.message = "Aconteceu um problema: " + data;
        });


    };

    $scope.abrirLogin =function(){

        $window.location.href="login.html";
    };
});