var INSSService = {
    
    calculate:function(sal){
        
       if(sal >=0 && sal <="1556.94"){
           return sal * 0.08;
       }else if(sal >= "1556.95" && sal <= "2594.92"){
           return sal * 0.09;
       }else if(sal>="2594.93" && sal <= "5189.92"){
           return sal * 0.11;
       }else if (sal >= "5189.93"){
           return 570.88;
       }
        
        
       return 0;
    }
        
};

module.exports = INSSService;