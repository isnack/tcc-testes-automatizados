var expect = require('chai').expect;
var folhaPagamentoService = require('../app/services/FolhaPagamentoService');


describe('Testa se os descontos de cada serviço está como especificado',function(){
    
    it('Se contém os atributos funcionario,descontos,salarioLiquido',function(){
     var funcionario ={
                        
                        "nome" : "Isnack Souza",
                        "endereco" : "Avenida Dr Lisboa",
                        "cidade" : "Pouso Alegre",
                        "estado" : "Minas Gerais",
                        "bairro" : "Centro",
                        "dependentes" : "0",
                        "salario" : 4500,
                        "__v" : 0
         
                       };    
        var folhaPagamento = folhaPagamentoService.generate(funcionario);
        
         expect(folhaPagamento).to.have.property('descontos');
         expect(folhaPagamento).to.have.property('funcionario');
         expect(folhaPagamento).to.have.property('salarioLiquido');
         
                
    });
    
    
});