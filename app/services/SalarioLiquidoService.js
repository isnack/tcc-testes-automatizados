/**
 * Created by Lais on 29/07/2016.
 */

var  IRService = require('./IRService')
var INSSService = require('./INSSService')

var SalarioLiquidoService = {

calculateSal:function (salario) {

    var salarioBruto = salario;

    var valorDescontadoInss = INSSService.calculate(salarioBruto);
    console.log("desconto inss "+ valorDescontadoInss );

    var salarioComDescontoInss = salarioBruto - valorDescontadoInss;
    console.log("salario com descontado inss "+ salarioComDescontoInss );

    var valorDescontadoIR = IRService.calculate(salarioComDescontoInss);
    console.log("desconto IR " + valorDescontadoIR );

    var salarioLiquido = salarioComDescontoInss - valorDescontadoIR;
    console.log(salarioLiquido);

}


};

module.exports =  SalarioLiquidoService;