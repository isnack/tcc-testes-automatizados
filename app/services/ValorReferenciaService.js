 var ValorRefenciaService = {

        referenciaInss:function(salario){

           if(salario >=0 && salario <= 1556.94){
               return "8 %";
           }else if(salario >= 1556.95 && salario <= 2594.92){
               return "9 %";
           }else if(salario>=2594.93 && salario <= 5189.92){
               return "11 %";
           }else if (salario >= 5189.93){
               return "Teto";
           }
           return "0";
      },
        referenciaIr:function(salario){
            
            if (salario < 1903.98) {
                return "0";
            } else if (salario >= 1903.99 && salario <= 2826.65) {
                return "7,5 %";
            }
            else if (salario >= 2826.66 && salario <= 3751.05) {
                return "15 %";
            } else if (salario >= 3751.06 && salario <= 4664.68) {
                return "22,5 %";
            } else if (salario >= 4664.69) {
                return "27,5 %";
            }
        }
    };
    module.exports = ValorRefenciaService;
