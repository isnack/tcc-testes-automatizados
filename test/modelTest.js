var mongoose = require('mongoose');
var assert = require('chai').assert;

var sinon = require('sinon');

require('sinon-mongoose');
//mongoose.connect('mongodb://localhost:27017/funcionario');

//schema


describe('Bateria de testes do módulo do banco', function () {

    
  var Funcionario = require('../models/funcionario');
  var FuncionarioMock = sinon.mock(Funcionario);
  

  it('Procurando pelo ID do Funcionario', function (done) {
    
    FuncionarioMock
      .expects('find').withArgs({ _id: 'ID' })
      .chain('exec')
      .yields(null, 'ID');

    Funcionario.findById('ID', function (err, result) {
      FuncionarioMock.verify();
      FuncionarioMock.restore();
      assert.equal(result, 'ID');
      done();
    });
});
    

    
    it('Removendo Funcionario pelo ID', function (done) {
       
    FuncionarioMock
      .expects('remove').withArgs({ _id: 'ID' })
      .chain('exec')
      .yields(null,null);

    Funcionario.delete('ID',function ( result) {
      FuncionarioMock.verify();
      FuncionarioMock.restore();
      assert.equal(result,null);
      done();
    });
});

     it('Atualizando um funcionario pelo ID',function(done){
    var query;
    var update;
            
    FuncionarioMock
      .expects('update').withArgs(query,update)
      .chain('exec')
      .yields(null, 'Funcionarios');
 
    Funcionario.updateFuncionario(query,update, function (err, result) {
      FuncionarioMock.verify();
      FuncionarioMock.restore();
      assert.equal(result, 'Funcionarios');
      done();
        
    });
       
    
    
});
    it('Listando Funcionarios', function () {
       
    FuncionarioMock
      .expects('find')
      .chain('exec')
      .yields(null, 'Funcionarios');

    Funcionario.list( function (err, result) {
      FuncionarioMock.verify();
      FuncionarioMock.restore();
      assert.equal(result, 'Funcionarios');
      done();
    });
 });
    
   it('Adicionando Funcionarios', function () {
       var funcionarioAdd;
    FuncionarioMock
      .expects('create').withArgs(funcionarioAdd)
      .chain('exec')
      .yields(null, 'Funcionario');

    Funcionario.add( funcionarioAdd,function (err, result) {
      FuncionarioMock.verify();
      FuncionarioMock.restore();
      assert.equal(result, 'Funcionario');
      done();
        });
    });
    

    });

/*var id =Funcionario.findById('578b0ae605c0523c1c1f4f54',function ( err,result) {
    return result;
});

console.log("id retornado e :"+id);

console.log(util.inspect(id, false, null));*/