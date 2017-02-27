//var casper = require('casper').create();
var mouse = require("mouse").create(casper);
var x = require('casper').selectXPath;
var oldLines = 0;
var funcionario = {
    nome: "José Luiz",
    endereço: 'Rua São João 35',
    cidade: 'Santa Rita do Sapucaí',
    estado: 'Minas Gerais',
    bairro: 'Centro',
    dependentes: '0',
    salario: '2500.00'

};

//Objeto contendo teste de inserir e atualizar funcionário autenticação
var formulario = {
    
    testAutenticacao:function(casper){
        casper.start('http://localhost:8585/public/');

        casper.then(function (casper) {
      this.test.assertExists(x('//*[@id="botao"]'), 'Testando se existe o botão de login');
        });
        //Proximo passo é clicar no botão    
        casper.then(function () {
            this.click(x('//*[@id="botao"]'));
        });
        casper.then(function () {
            this.capture('testFunctional/img/teste1.png');
        });
  // Proximo passo é somente informar o login sem a senha
        casper.then(function () {
            this.sendKeys('#usuario', 'admin');
        });
        casper.then(function () {
            this.capture('testFunctional/img/teste2.png');
        });
  //Proximo passo é verificar a validação dos campos de autenticação e verificar se foi informado um erro    
        casper.then(function () {
            this.test.assertTextExists('Por favor, preencha os campos!', 'Testando se no corpo da pagina contém a frase "Por favor, preencha os campos!"');
        });
        casper.then(function () {
            this.sendKeys('#senha', 'admin1');
            this.click(x('//*[@id="loginForm"]/div[5]/div/button'));
        });
        casper.wait(3000, function () {
            this.echo("Esperando Resposta do Servidor!!");
        });
        casper.then(function () {
            this.test.assertTextExists('Usuario e/ou senha inválidos', 'Testando se o usuário foi impedido de entrar e se a mensagem de alerta é a correta"');
        });
  //Proximo passo informar os campos login e senha corretamente
        casper.then(function () {
            this.sendKeys('#usuario', 'admin');
            this.sendKeys('#senha', 'admin');
            this.click(x('//*[@id="loginForm"]/div[5]/div/button'));
        });
        casper.wait(3000, function () {
            this.echo("Esperando Entrada no Sistema!");
        });
        casper.then(function () {
            this.capture('testFunctional/img/teste3.png');
        });
  //Proximo passo testar se está logado
        casper.then(function () {
            this.test.assertTitle("Funcionários", "Testando se está na página de Funcionários");

        });
    },
    
    
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    
    testInserirFuncionario: function (casper, funcionario) {
        casper.then(function () {
            this.sendKeys(x('/html/body/div/form/div[1]/input'), funcionario.nome);
        });

        casper.then(function () {

            this.capture('testFunctional/img/teste4.png');
        });
        // Testando validação dos campos
        casper.then(function () {
            this.test.assertTextExists('Preencha os campos', 'Testando se no corpo da pagina contém a frase "Por favor, preencha os campos!"');
        });

        casper.then(function () {
            this.sendKeys(x('/html/body/div/form/div[2]/input'), funcionario.endereço);
            this.sendKeys(x('/html/body/div/form/div[3]/input'), funcionario.cidade);
            this.sendKeys(x('/html/body/div/form/div[4]/input'), funcionario.estado);
            this.sendKeys(x('/html/body/div/form/div[5]/input'), funcionario.bairro);
            this.sendKeys(x('/html/body/div/form/div[6]/input'), funcionario.dependentes);
            this.sendKeys(x('/html/body/div/form/div[7]/input'), funcionario.salario);
            this.click(x('/html/body/div/form/input[1]'));
        });

        casper.then(function () {
            this.capture('testFunctional/img/teste5.png');

        });
        casper.wait(2000, function () {
            this.echo("Esperando Entrada no Sistema!");
        });

        //Testando se o funcionário foi adicionado com sucesso
        casper.then(function () {
            this.test.assertTextExists('Funcionário adicionado com sucesso', 'Testando se no corpo da pagina Após clicar em cadastrar se contém a frase "Funcionário adicionado com sucesso"');
        });
        casper.then(function () {
            this.click(x('/html/body/div/form/input[2]'));
        });

    },
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    testAtualizarFuncionario: function (casper) {
        casper.then(function () {
            this.test.assertTextExists('Preencha os campos', 'Testando se no corpo da pagina contém a frase "Por favor, preencha os campos!"');
        });

        casper.then(function () {
            this.mouse.doubleclick(x('/html/body/div/form/div[7]/input'));

            this.sendKeys(x('/html/body/div/form/div[7]/input'), '5000.00');
            this.click(x('/html/body/div/form/input[1]'));
        });

        casper.then(function () {
            this.capture('testFunctional/img/teste7.png');

        });
        casper.wait(2000, function () {
            this.echo("Esperando Entrada no Sistema!");
        });

        //Testando se o funcionário foi adicionado com sucesso
        casper.then(function () {
            this.test.assertTextExists('Funcionário atualizado com sucesso', 'Testando se no corpo da pagina Após clicar em atualizar se contém a frase "Funcionário atualizado com sucesso"');
        });
        casper.then(function () {
            this.click(x('/html/body/div/form/input[2]'));
        });
           casper.wait(3000, function () {
            this.echo("Esperando Resposta do Servidor!!");
        });
    },
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    testGerarFolhaSalarial:function(casper,descontoIr,descontoInss,salario,salarioLiquido,nome){
        casper.wait(3000, function () {
            this.echo("Esperando Pagina Carregar Proxima página!!");
        });
     
        casper.then(function () {
            this.test.assertExists(x("/html/body/table/tbody/tr[3]/td[5][normalize-space()='"+descontoIr+"']"),'Testando o valor de desconto do IR está impresso');
        });
        casper.then(function () {
            this.capture('testFunctional/img/teste6.png');
            this.test.assertExists(x("/html/body/table/tbody/tr[4]/td[5][normalize-space()='"+descontoInss+"']"),'Testando o valor de desconto do INSS está impresso');
        });
        casper.then(function(){
            
           this.test.assertExists(x("/html/body/table/tbody/tr[2]/td[4][normalize-space()='"+salario+"']"),'Testando o valor salario está impresso');           
        });
          casper.then(function(){
            
           this.test.assertExists(x("/html/body/table/tbody/tr[7]/td[5][normalize-space()='"+salarioLiquido+"']"),'Testando o valor salario Líquido está impresso');           
        });
     
        casper.then(function () {
            this.test.assertExists(x("/html/body/table/thead/tr/th [normalize-space()='Nome: "+nome+"']"),'Testando se o nome do funcionário está impresso');
        });
        
        casper.waitForSelector(x('/html/body/input'), function () {
            this.click(x('/html/body/input'));
            
        });
           casper.wait(3000, function () {
            this.echo("Esperando Pagina Carregar Proxima página!!");
        });
        
    }
  }

casper.test.begin('Teste Funcional da Folha de Pagamento', 15, function (test) {
    //casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');

    
    //Metodo de teste de autenticação de usuário
    formulario.testAutenticacao(casper);
    //Método que retorna a quantidade de tabelas
    casper.then(function () {
        this.getResultsCount = function () {
            return casper.evaluate(function () {
                return __utils__.findAll('table').length;

            });
        };
        oldLines = this.getResultsCount();
       
    });
    //Entrando na pagina de Cadastro de Funcionários
    casper.then(function () {
        this.click(x('//*[@id="buttonAddFunc"]/button'));
    });

    //Teste de inserção de funcionário e validação do formulário 
    formulario.testInserirFuncionario(casper, funcionario);
    casper.wait(3000, function () {
            this.echo("Adição do funcionário!");
     });

    //Verificando se o funcionário está sendo listado, alteração na quantidade de linhas
    casper.then(function () {
        this.test.assertElementCount('table', oldLines + 1, 'Verificando se houve alteração na quantidade de funcionários para mais');
    });
 
    casper.then(function () {
        oldLines = this.getResultsCount();
    });
    casper.then(function () {
            this.click(x('//*[@id="tabela' + (this.getResultsCount() - 1) + '"]/tbody/tr[2]/td[2]/button'));

     });
    
    formulario.testGerarFolhaSalarial(casper,'27.82','225.00','2500.00','2247.18','José Luiz');

    casper.then(function () {
        this.click(x('//*[@id="tabela' + (this.getResultsCount() - 1) + '"]/tbody/tr[2]/td[3]/button'));

    });

    //Realizando o testes de atualização do funcionário
    formulario.testAtualizarFuncionario(casper);

   // formulario.testGerarFolhaSalarial(casper,'365.12','550.00','5000.00','José Luiz');
    
    //Excluindo Funcionários
    casper.then(function () {
        this.click(x('//*[@id="tabela' + (this.getResultsCount() - 1) + '"]/tbody/tr[2]/td[4]/button'));

    });
    casper.wait(2000, function () {
        this.echo("Esperando Entrada no Sistema!");
    });


    //Verificando se houve diminuição de funcionários na lista
    casper.then(function () {
       this.test.assertElementCount('table', oldLines - 1, 'Verificando se houve alteração na quantidade de funcionários Após a exclusão');
    });
    casper.then(function () {

        this.capture('testFunctional/img/teste8.png');
    });
    
    casper.run(function () {
        test.done();
    });



});