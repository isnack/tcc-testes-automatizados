angular.module("folhaPagamento").controller("addFuncionarioController",function($scope,funcionarioServices){
    
    $scope.adicionarFuncionario=function(funcionario){
              
        funcionarioServices.addFuncionario(funcionario).success(function(data){
        delete $scope.funcionario;
        $scope.funcionarioForm.$setPristine();
        }).error(function (data) {
               $scope.message = "Aconteceu um problema: " + data;
		});
      
        
    };
    
});