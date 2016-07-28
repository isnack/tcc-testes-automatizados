var mongoose = require('mongoose');
var Funcionario = require('../../models/funcionario');
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
      var funcionario =JSON.parse(req.body)
      
     Funcionario.add(funcionario,function(err,result){
    
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
      
      
     var funcionario =JSON.parse(req.body)
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
      
      res.send(200,'folha');
      
      
  }
    
    
    
};

module.exports=routes;