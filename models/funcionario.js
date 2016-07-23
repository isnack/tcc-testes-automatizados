var mongoose = require('mongoose');


var funcionarioSchema = new mongoose.Schema({
	nome: String,
    endereco: String,
    cidade: String,
    estado: String,
    bairro: String,
    dependentes: String,
    salario:Number
   
});


funcionarioSchema.static('findById',function(id,callback){
   return this.find({_id:id}).exec(callback);
    
});

funcionarioSchema.static('list',function(callback){
   return this.find().exec(callback);
    
});

funcionarioSchema.static('delete',function(id,callback){
   return this.remove({_id:id}).exec(callback);
    
});

funcionarioSchema.static('updateFuncionario',function(query,update,callback){
   return this.update(query,update).exec(callback);
    
});

funcionarioSchema.static('add',function(funcionario,callback){
   return this.create(funcionario,callback)
    
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);