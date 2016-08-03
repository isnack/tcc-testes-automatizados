
var expect = require('chai').expect;
var inssService = require('../app/services/INSSService')

describe('Bateria de testes do módulo de calculo do INSS',function(){
    
    it('Testando faixa de desconto do INSS de 8%',function(){
        expect(81).to.equal(inssService.calculate(1000));
    });
    it('Testando faixa de desconto do INSS de 9%',function(){
        expect(153).to.equal(inssService.calculate(1700));
    });
    it('Testando faixa de desconto do INSS de 11%',function(){
        expect(297).to.equal(inssService.calculate(2700));
    });
    it('Testando teto máximo do INSS',function(){
        expect(570.88).to.equal(inssService.calculate(5980.96));
    });
    it('Testando valores zerados de salario',function(){
        expect(0).to.equal(inssService.calculate(0));
    });
    it('Testando valores negativos',function(){
        expect(0).to.equal(inssService.calculate(-1569));
    });
    
});
