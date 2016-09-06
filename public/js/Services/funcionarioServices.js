angular.module('folhaPagamento').factory('funcionarioServices',function($http){
    
    var _getFuncionarios,_addFuncionario,_removeFuncionario,_getFuncionario;
    
    _getFuncionarios = function(){
             
        return  $http.get("http://localhost:3000/api/funcionarios");      
    },
    
     _addFuncionario = function(funcionario){
        
         return $http.post("http://localhost:3000/api/funcionarios", funcionario);
    },
        
    _removeFuncionario = function(funcionario){
        return $http.delete("http://localhost:3000/api/funcionarios/"+funcionario._id+"");
    },
    
    _getFuncionario = function(id){
        
        return $http.get("http://localhost:3000/api/funcionarios/"+id);
    },
    _updateFuncionario = function(funcionario){
        
         return $http.put("http://localhost:3000/api/funcionarios", funcionario);
    },
    _folhaSalarial = function(funcionario){
       return $http.get("http://localhost:3000/api/folhaSal/"+funcionario._id+"");
    }
    return {
            getFuncionarios:_getFuncionarios,
            addFuncionario:_addFuncionario,
            removeFuncionario:_removeFuncionario,
            getFuncionario:_getFuncionario,
            updateFuncionario:_updateFuncionario,
            folhaSalarial:_folhaSalarial
           }
});