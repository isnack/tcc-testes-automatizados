/**
 * Created by Lais on 29/07/2016.
 */

var expect = require('chai').expect;
var IRService = require('../app/services/IRService')

describe('Bateria de teste do modulo IR', function () {

    it('testando desconto de IR de 7,5&', function () {
        expect(44.70).to.be.closeTo(IRService.calculate(2500),0.01);
    });

     it('testando desconto de IR de 15%', function () {
         expect(170.20).to.equal(IRService.calculate(3500))
     });

      it('testando desconto de IR de 22,5%', function () {
          expect(376.37).to.equal(IRService.calculate(4500))
      });

       it('testando desconto de IR de 27,5%', function () {
            expect(643.14).to.be.closeTo(IRService.calculate(5500),0.01)
       });

       it(' testando valor de IR negativo', function () {
           expect(0).to.equal(IRService.calculate(-1979))

       });

       it('testando valores zerados', function () {
           expect(0).to.equal(IRService.calculate(0))

       });





});