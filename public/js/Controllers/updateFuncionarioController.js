angular.module("folhaPagamento").controller("updateFuncionarioController",function($scope,$window,funcionarioServices,$location){
     var carregarFuncionario,
         idFuncionario;
       $scope.funcionario=[];
       $scope.message=null;
    
    $scope.atualizarFuncionario=function(funcionario){
        funcionarioServices.updateFuncionario(funcionario).success(function(data){
            $scope.message = "Funcionário atualizado com sucesso";
        }).error(function (data, status) {
            console.dir("Aconteceu um problema: " + JSON.stringify(data));
			$scope.message = "Não foi possível realizar essa operação";
		});
    };
    
    $scope.voltarPagina =function(){
        
        $window.location.href="listarFuncionarios.html";
    };
   
     carregarFuncionario =function(id){  
      funcionarioServices.getFuncionario(id).success(function (funcionario) {
        $scope.funcionario =funcionario[0]; 
         
			
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
         
        
   };
    idFuncionario= $location.search().id;  
    carregarFuncionario(idFuncionario);
   
    
    
});