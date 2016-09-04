angular.module("folhaPagamento").controller("updateFuncionarioController",function($scope,funcionarioServices,$location){
     var carregarFuncionario,
         idFuncionario,funcionarioCtl=[];
       $scope.funcionario=[];
    
    
    $scope.atualizarFuncionario=function(funcionario){
        funcionarioServices.updateFuncionario(funcionario).success(function(data){
            $scope.message = "Atualizado com sucesso" + data;
        }).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
    }
   
     carregarFuncionario =function(id){  
      funcionarioServices.getFuncionario(id).success(function (funcionario) {
        $scope.funcionario =funcionario[0]; 
         
			
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
    return funcionarioCtl;
   };
    idFuncionario= $location.search().id;  
    carregarFuncionario(idFuncionario);
   
    
    
});