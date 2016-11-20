angular.module("folhaPagamento").controller("generateFolhaSalarial",function($scope,$window,funcionarioServices,$location,$timeout){
     var carregarFolhaSalarial,funcionario,idFuncionario;
   
    
    carregarFolhaSalarial=function(funcionario){
         funcionarioServices.folhaSalarial(funcionario).success(function (folhaSalarial) {
         $scope.folhaSalarial =folhaSalarial; 
         
			
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
        
    };
     $scope.voltarPagina =function(){
        
        $window.location.href="listarFuncionarios.html";
    };
    
     carregarFuncionario =function(id){  
      funcionarioServices.getFuncionario(id).success(function (funcionario) {
       carregarFolhaSalarial(funcionario[0]);
        
			
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
     };
    
    idFuncionario= $location.search().id;  
    carregarFuncionario(idFuncionario);
   
    
   
});