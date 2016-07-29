/**
 * Created by Lais on 29/07/2016.
 */

var  IRService = require('./IRService')
var INSSService = require('./INSSService')

var SalarioLiquidoService = {

calculateSal:function (salario) {

    var salarioBruto = salario;
    var descontoInss = INSSService.calculate(salarioBruto);
    console.log("desconto inss "+ descontoInss );

    var salarioDescontoInss = salarioBruto-descontoInss;
    console.log("salario descontado inss "+ salarioDescontoInss );

    var descontoIR = IRService.calculate(salarioDescontoInss);
    console.log("desconto IR "+ descontoIR );

    var salarioLiquido = salarioDescontoInss-descontoIR;
    console.log(salarioLiquido);

}


};

module.exports =  SalarioLiquidoService;