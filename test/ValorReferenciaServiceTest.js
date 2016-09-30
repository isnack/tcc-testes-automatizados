var expect = require('chai').expect;
var valorReferenciaService = require('../app/services/ValorReferenciaService')


describe('Bateria de testes do serviço de valor referência', function () {

    it('Testando valor refencia do Inss é de 8 %', function () {
        expect(valorReferenciaService.referenciaInss(1556.94)).to.equal('8 %');
    });

    it('Testando valor refencia do Inss é de 9 %', function () {
        expect(valorReferenciaService.referenciaInss(1700)).to.equal('9 %');
    });

    it('Testando valor refencia do Inss é de 11 %', function () {
        expect(valorReferenciaService.referenciaInss(2700)).to.equal('11 %');
    });

    it('Testando valor refencia do Inss é o Teto', function () {
        expect(valorReferenciaService.referenciaInss(5980.96)).to.equal('Teto');
    });

    it('Testando valor refencia do Inss é de 0 %', function () {
        expect(valorReferenciaService.referenciaInss(-2751)).to.equal('0 %');
    });


});