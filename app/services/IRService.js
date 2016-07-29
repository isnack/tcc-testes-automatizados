/**
 * Created by Lais on 28/07/2016.
 */

var IRService = {

    calculate:function(salario) {

        if(salario < "1903.98") {
            return 0;
        }else if (salario>= "1903.99" && salario<= "2826.65"){
            return (salario * 0.075) - 142.80;
        }
        }





};

module.exports = IRService;