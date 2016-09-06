angular.module("folhaPagamento").controller("addFuncionarioController",function($scope,$window,funcionarioServices){
    $scope.message=null;
    
    $scope.adicionarFuncionario=function(funcionario){
              
        funcionarioServices.addFuncionario(funcionario).success(function(data){
            delete $scope.funcionario;
            $scope.message="Funcionário adicionado com sucesso";
            $scope.funcionarioForm.$setPristine();
        }).error(function (data) {
              console.log("Aconteceu um problema: " + data);
              $scope.message = "Não foi possível adicionar funcionário";
		});              
    };
    
     $scope.voltarPagina =function(){
        
        $window.location.href="listarFuncionarios.html";
    };
    
});