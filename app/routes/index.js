var mongoose = require('mongoose');
var Funcionario = require('../../models/funcionario');
var folhaPagamento = require('../services/FolhaPagamentoService');
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
      
      
      
  }
    
    
    
};

module.exports=routes;