angular.module("folhaPagamento").controller("listFuncionarioController",function($scope,$window,funcionarioServices){
    
    $scope.funcionarios=[];
    
    var carregarFuncionarios =function(){  
        funcionarioServices.getFuncionarios().success(function (data) {
			$scope.funcionarios = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
    
   };
    
     $scope.deleteFuncionario = function(funcionario){
       /* funcionarioServices.removeFuncionario(funcionario).success(function (data){
           carregarFuncionarios();
             $scope.message = "Removido com Sucesso";
        }).error(function(status){
            $scope.message = "Aconteceu um problema: " + status;
            
        });*/
        console.log(funcionario);
    };
    
    $scope.abrirAdicionarFuncionario = function(){
        
       $window.location.href="cadastroFuncionario.html"
    }
         
         
         
   
    carregarFuncionarios();
    
});

