angular.module("folhaPagamento").controller("addFuncionarioController",function($scope,funcionarioServices){
    
    $scope.adicionarFuncionario=function(funcionario){
        console.log(funcionario);
        
        funcionarioServices.addFuncionario(funcionario).success(function(data){
            console.log(data);
        delete $scope.funcionario;
        $scope.funcionarioForm.$setPristine();
        }).error(function (data) {
			alert(data);
		});
      
        
    };
    
});