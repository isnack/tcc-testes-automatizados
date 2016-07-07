var expect = require('chai').expect;
var inssService = require('../app/INSSService')

describe('Bateria de testes do módulo de calculo do INSS',function(){
    
    it('Testando faixa de desconto do INSS de 8%',function(){
        expect(80).to.equal(inssService.calculate(1000));
    });
    
    
});