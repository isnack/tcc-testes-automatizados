/**
 * Created by Lais on 26/09/2016.
 */

angular.module('folhaPagamento').factory('loginService',function($http) {


    var _getLogin;

    _getLogin = function (usuario) {
        return $http.post("http://localhost:3000/api/authentication", usuario);
    }
    return{
        autenticacao: _getLogin

    }

});
