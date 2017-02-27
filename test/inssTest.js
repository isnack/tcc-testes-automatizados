
var expect = require('chai').expect;
var inssService = require('../app/services/INSSService')

describe('Bateria de testes do módulo de calculo do INSS',function(){
    
    it('Testando faixa de desconto do INSS de 8%',function(){
        expect(inssService.calculate(1000)).to.equal(80);
		 expect(inssService.calculate(1556.94)).to.be.closeTo(124.55 , 0.01);
    });
    it('Testando faixa de desconto do INSS de 9%',function(){
        expect(inssService.calculate(1700)).to.equal(153);
	expect(inssService.calculate(2594.92)).to.be.closeTo(233.54, 0.01);

    });
    it('Testando faixa de desconto do INSS de 11%',function(){
        expect(inssService.calculate(2700)).to.equal(297);
	 expect(inssService.calculate(5189.92)).to.be.closeTo(570.89 , 0.01);

    });
    it('Testando teto máximo do INSS',function(){
        expect(inssService.calculate(5980.96)).to.equal(570.88);
	expect(inssService.calculate(5189.93)).to.equal(570.88);
    });
    it('Testando valores zerados de salario',function(){
        expect(inssService.calculate(0)).to.equal(0);
    });
    it('Testando valores negativos',function(){
        expect(inssService.calculate(-1569)).to.equal(0);
    });
    
});
