

var expect = require('chai').expect;
var salarioLiquidoService = require('../app/services/SalarioLiquidoService');


describe('Testa se os descontos de cada serviço está como especificado',function(){
    
    it('Salario faixa minima na qual é descontada somente o Inss',function(){
                           
         expect(salarioLiquidoService.calculate(1500)).to.equal(1380);
                
    });
    

    it('Salario faixa 9% de desconto do Inss com desconto de IR faixa de 7.5%',function(){
               
         expect(salarioLiquidoService.calculate(2300)).to.be.closeTo(2078.83,0.01);
                  
    });
    
    it('Salario faixa 11% de desconto do Inss com desconto de IR faixa de 15%',function(){
        
         expect(salarioLiquidoService.calculate(3200)).to.be.closeTo(2775.60,0.01);
        
    });
    
    it('Salario faixa 11% de desconto do Inss com desconto de IR faixa de 22,5%',function(){
        
        expect(salarioLiquidoService.calculate(4450.00)).to.be.closeTo(3705.52,0.01)
        
    });
    
     it('Salario desconto teto do Inss com desconto de IR faixa de 27,5%',function(){
        
        expect(salarioLiquidoService.calculate(5200.00)).to.be.closeTo(4223.70,0.01)
        
    });
    
});