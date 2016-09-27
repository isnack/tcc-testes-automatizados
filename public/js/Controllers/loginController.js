

angular.module("folhaPagamento").controller("loginController",function($scope, $window,loginService){

    $scope.efetuarLogin=function(login){


        loginService.autenticacao(login).success(function(data){

            if(data.message){
                $scope.message = data.message;
            }
            else{
                $scope.autenticar(data.url);
            }

            delete $scope.login;
            $scope.loginForm.$setPristine();
        }).error(function (data) {
            $scope.message =  data.message;
        })

    };

    $scope.abrirLogin =function(){

        $window.location.href = "login.html";

    };

    $scope.autenticar = function (url) {
        $window.location.href = url;
    }
});