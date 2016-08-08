

var expect = require('chai').expect;
var irService = require('../app/services/IRService')
var inssService = require('../app/services/INSSService')


describe('Testa se os descontos de cada serviço está como especificado',function(){
    
    it('Salario faixa minima somente do Inss',function(){
        var sal =1500;
        var descontoInss=inssService.calculate(sal);
        var descontoIR = irService.calculate(sal-descontoInss);
        
         expect(120).to.equal(descontoInss);
         expect(1380).to.equal(sal-descontoInss);
         expect(0).to.equal(descontoIR);
         expect(1380).to.equal(sal-descontoInss-descontoIR);
        
        
    });
    
    it('Salario faixa 9%  do Inss com desconto de IR',function(){
        var sal =2300;
        var descontoInss=inssService.calculate(sal);
        var descontoIR = irService.calculate(sal-descontoInss);
        
         expect(207).to.equal(descontoInss);
         expect(2093).to.equal(sal-descontoInss);
         expect(14.17).to.be.closeTo(descontoIR, 0.01);
         expect(2078.83).to.be.closeTo(sal-descontoInss-descontoIR,0.01);
       
        
    });
    
    
    
    
});