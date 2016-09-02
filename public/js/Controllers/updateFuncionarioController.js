angular.module("folhaPagamento").controller("updateFuncionarioController",function($scope,funcionarioServices,$location){
     var carregarFuncionario,
         idFuncionario,funcionarioCtl=[];
       $scope.funcionario=[];
   
     carregarFuncionario =function(id){  
      funcionarioServices.getFuncionario(id).success(function (funcionario) {
        funcionarioCtl.data =funcionario; 
         
			
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
    return funcionarioCtl;
   };
    idFuncionario= $location.search().id;  
   $scope.funcionario= carregarFuncionario(idFuncionario);
    var teste = carregarFuncionario(idFuncionario);
     console.log(teste.nome);
     console.log("foi ? "+$scope.funcionario);
    
});