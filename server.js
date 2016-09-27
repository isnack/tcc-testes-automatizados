var restify = require('restify');
var port = process.env.PORT || 3000;
var routes = require('./app/routes');


var server = restify.createServer({
   name:'Rest Api' 
    
});

server.use(function(req,res,next){
    console.log(req.method + ' ' +req.url);
    return next();    
});

server.use(restify.bodyParser());
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);
server.get('api/funcionarios',routes.getAllFuncionarios);
server.get('api/funcionarios/:id',routes.getFuncionariosById);
server.post('api/funcionarios',routes.createFuncionarios);
server.put('api/funcionarios',routes.updateFuncionarios);
server.del('api/funcionarios/:id',routes.removeFuncionarios);
server.get('api/folhaSal/:id',routes.getFolhaSalarial);
server.post('api/authentication',routes.authenticationUser);

server.listen(port,function(){
    
 console.log('Servidor rodando na porta ' +port);  
    
});

module.exports = server;
