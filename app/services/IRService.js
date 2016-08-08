/**
 * Created by Lais on 28/07/2016.
 */

var IRService = {

    calculate:function(salario) {

        if (salario < "1903.98") {
            return 0;
        } else if (salario >= "1903.99" && salario <= "2826.65") {
            return (salario * 0.075) - 142.80;
        }
        else if (salario >= "2826.66" && salario <= "3751.05") {
            return (salario * 0.15) - 354.80;
        } else if (salario >= "3751.06" && salario <= "4664.68") {
            return (salario * 0.225) - 636.13;
        } else if (salario >= 4664.69) {
            return (salario * 0.275) - 869.36;
        }

    }


};

module.exports = IRService;





