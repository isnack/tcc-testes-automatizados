/**
 * Created by Lais on 29/07/2016.
 * Módulo responsável por realizar o calculo do salário liquido informando o salário bruto
 */

//Declaração de Serviços
var  IRService = require('./IRService')
var INSSService = require('./INSSService')

var SalarioLiquidoService = {

calculate:function (salario) {

    var salarioBruto = salario;
    var valorDescontadoInss,salarioComDescontoInss,
        valorDescontadoIR,salarioLiquido;
    
    
    valorDescontadoInss = INSSService.calculate(salarioBruto);
    salarioComDescontoInss = salarioBruto - valorDescontadoInss;
    valorDescontadoIR = IRService.calculate(salarioComDescontoInss);
    salarioLiquido = salarioComDescontoInss - valorDescontadoIR;

    
    return salarioLiquido;

}


};

module.exports =  SalarioLiquidoService;