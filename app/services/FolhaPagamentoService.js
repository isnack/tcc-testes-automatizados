var inssService = require('./INSSService')
var irService=require('./IRService')
var valorRefenciaService = require('./ValorReferenciaService')
var salLiquidoService =require('./SalarioLiquidoService')



var FolhaPagamentoService = {
    
    generate:function(funcionario){
        var descontoInss,descontoIR,salarioLiquido,valRefInss,valRefIr,totalDescontos;
        
       
        // setor que recebe valor do desconto inss e imposto de renda e salario líquido além dos valores referência de desconto do inss e ir
        descontoInss = inssService.calculate(funcionario[0].salario);
        valRefInss = valorRefenciaService.referenciaInss(funcionario[0].salario);
        descontoIR = irService.calculate(funcionario[0].salario-descontoInss);
        valRefIr = valorRefenciaService.referenciaIr(funcionario[0].salario-descontoInss);
        salarioLiquido = salLiquidoService.calculate(funcionario[0].salario);
        totalDescontos = descontoInss + descontoIR;
        
    var descontos ={
         inss:descontoInss,
            ir:descontoIR,
        totalDescontos:totalDescontos
    },
    valorReferencia ={
        refInss:valRefInss,
        refIr:valRefIr
    },
    //Criando objeto que contém todos os dados da folha de pagamento como dados do funcionário, valor, referência, descontos e salario liquido
    dadosFolhaPagamento ={
        funcionario:funcionario[0],
        valorReferencia:valorReferencia,
        descontos:descontos,
        salarioLiquido:salarioLiquido
    };
        
        return dadosFolhaPagamento;
    
    }
        
};

module.exports = FolhaPagamentoService;