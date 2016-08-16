/**
 * Created by Lais on 29/07/2016.
 */

var expect = require('chai').expect;
var IRService = require('../app/services/IRService')

describe('Bateria de testes do modulo IR', function () {

    it('Testando desconto de IR de 7,5&', function () {
        expect(IRService.calculate(2500)).to.be.closeTo(44.70,0.01);
    });

     it('Testando desconto de IR de 15%', function () {
         expect(IRService.calculate(3500)).to.equal(170.20)
     });

      it('Testando desconto de IR de 22,5%', function () {
          expect(IRService.calculate(4500)).to.equal(376.37)
      });

       it('Testando desconto de IR de 27,5%', function () {
            expect(IRService.calculate(5500)).to.be.closeTo(643.14,0.01)
       });

       it('Testando valor de IR negativo', function () {
           expect(IRService.calculate(-1979)).to.equal(0)

       });

       it('Testando valores zerados', function () {
           expect(0).to.equal(IRService.calculate(0))

       });





});