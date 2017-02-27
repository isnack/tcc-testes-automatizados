var mongoose = require('mongoose');
var Funcionario = require('../../models/funcionario');
var Usuario = require('../../models/login');
var folhaPagamento = require('../services/FolhaPagamentoService');
var loginServices = require('../services/LoginService');
mongoose.connect('mongodb://localhost:27017/funcionario');

var routes ={
    
  getAllFuncionarios:function(req,res,next){
      
    Funcionario.list(function(err,result){
    
        if(err==null){
            if(result != null){
               res.send(200,result);
            }else{
               res.send(404); 
            }
        }else{
            res.send(500,err);
        }
    
    
    
});
      
      
  },
    
  getFuncionariosById:function(req,res,next){
      
      var id=req.params.id;
      Funcionario.findById(id,function(err,result){
    
        if(err==null){
            if(result != null){
               res.send(200,result);
            }else{
               res.send(404); 
            }
        }else{
            res.send(500,err);
        }
    
    
    
});
    
      
  },
  createFuncionarios:function(req,res,next){
       
     var funcionario =req.body;
       
      console.log(funcionario);
     Funcionario.add(funcionario,function(err,result){
     console.log(result);
        if(err==null){
            if(result != null){
               res.send(200,result);
            }else{
               res.send(404); 
            }
        }else{
            res.send(500,err);
        }
    
    
    
});
      
  },
  updateFuncionarios:function(req,res,next){
      
      
     var funcionario =req.body;
     var id =funcionario._id;
     
     Funcionario.updateFuncionario({_id:id},funcionario,function(err,result){
    
        if(err==null){
            if(result != null){
               res.send(200,result);
            }else{
               res.send(404); 
            }
        }else{
            res.send(500,err);
        }
    
    
    
});
      
  },
  removeFuncionarios:function(req,res,next){
      
      
      var id=req.params.id;
      Funcionario.delete(id,function(err,result){
    
        if(err==null){
            if(result != null){
               res.send(200,result);
            }else{
               res.send(404); 
            }
        }else{
            res.send(500,err);
        }
    
    
    
});
      
  },
  getFolhaSalarial:function(req,res,next){
      
       var id=req.params.id;
      Funcionario.findById(id,function(err,result){
         
        
          res.send(200,folhaPagamento.generate(result));
          
      });
  },

    authenticationUser:function(req,res,next){
      var usuario = req.body;
        console.log(usuario);
      Usuario.find({$and:[{usuario:usuario.usuario },{senha:usuario.senha }]},function(err,result){

        if(err==null){
            if(result != null){
               console.log(result);
           res.send(200,loginServices.redirecionar(result));
        }else{
             console.log(result);
            res.send(404,loginServices.redirecionar(result));
           //res.send(404); 
        }
        }else{
            res.send(500,err);
        }




      }); 
    },

    createUser:function(req,res,next){

        //var usuario =req.body;    
        var usuario={
            usuario:"admin",
            senha:"admin"            
        };
            Usuario.find(usuario,function(err,result){

                if(result.length==0){
                    console.log(result);
                       Usuario.create(usuario);
                      

             

                if(result != null){
                   res.send(200,"Usuario Administrador criado com sucesso!, Acesso o endereço http://127.0.0.1:8585/public/ para realizar o login no sistema");
                }else{
                   res.send(404); 
                }
            }else{
                res.send(200,"Usuário Administrador já existente");
            }

    });

    }



};

module.exports=routes;