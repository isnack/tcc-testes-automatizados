var LoginService = {

    redirecionar:function(id) {
        
        var response;
        console.log(id);
        if(id.length>0){
            
            response={
                url:"listarFuncionarios.html",
                
            }
            
        }else{
            response={
                message:"Usuario e/ou senha inválidos",                
            } 
            
        }
      return response;

    }


};

module.exports = LoginService;