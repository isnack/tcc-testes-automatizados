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
    // IR


    it('Testando valor refencia do de 7,5&', function () {
        expect(valorReferenciaService.referenciaIr(2500)).to.equal('7,5 %');
    });

    it('Testando valor refencia do IR de 15%', function () {
        expect(valorReferenciaService.referenciaIr(3500)).to.equal('15 %');
    });

    it('Testando valor refencia do IR de 22,5%', function () {
        expect(valorReferenciaService.referenciaIr(4500)).to.equal('22,5 %');
    });

    it('Testando valor refencia do IR de 27,5%', function () {
        expect(valorReferenciaService.referenciaIr(5500)).to.equal('27,5 %');
    });

    it('Testando valor refencia do negativo tem que retornar 0', function () {
        expect(valorReferenciaService.referenciaIr(-1979)).to.equal('0 %');

    });

    it('Testando valor refencia com valores zerados', function () {
        expect(valorReferenciaService.referenciaIr(0)).to.equal('0 %');

    });


});