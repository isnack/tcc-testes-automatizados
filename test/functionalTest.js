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
    salario: '2500.50'

};

//Objeto contendo teste de inserir e atualizar funcionário autenticação
var formulario = {
    testInserirFuncionaorio: function (casper, funcionario) {
        casper.then(function () {
            this.sendKeys(x('/html/body/div/form/div[1]/input'), funcionario.nome);
        });

        casper.then(function () {

            this.capture('teste5.png');
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
            this.capture('teste5.png');

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
            this.capture('teste7.png');

        });
        casper.wait(2000, function () {
            this.echo("Esperando Entrada no Sistema!");
        });

        //Testando se o funcionário foi adicionado com sucesso
        casper.then(function () {
            this.test.assertTextExists('Funcionário atualizado com sucesso', 'Testando se no corpo da pagina Após clicar em cadastrar se contém a frase "Funcionário atualizado com sucesso"');
        });
        casper.then(function () {
            this.click(x('/html/body/div/form/input[2]'));
        });
    },
    testAutenticacao:function(casper){
        casper.start('file:///C:/Users/Isnack%20Developer/Dropbox/Uso-de-testes-automatizados2/public/index.html');


        casper.then(function (casper) {
      this.test.assertExists(x('//*[@id="botao"]'), 'Testando se existe o botão de login');
        });

  //Proximo passo é clicar no botão    
        casper.then(function () {
            this.click(x('//*[@id="botao"]'));
        });

        casper.then(function () {
            this.capture('teste2.png');
        });

  // Proximo passo é somente informar o login sem a senha
        casper.then(function () {
            this.sendKeys('#usuario', 'admin');
        });
        casper.then(function () {
            this.capture('teste3.png');
        });
  //Proximo passo é verificar a validação dos campos de autenticação e verificar se foi informado um erro    
        casper.then(function () {
            this.test.assertTextExists('Por favor, preencha os campos!', 'Testando se no corpo da pagina contém a frase "Por favor, preencha     campos!"');
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
            this.capture('teste4.png');
        });

  //Proximo passo testar se está logado
        casper.then(function () {
            this.test.assertTitle("Funcionários", "Testando se está na página de Funcionários");

        });
    },
    testGerarFolhaSalarial:function(casper){
        
     
         casper.then(function () {
            this.test.assertTextExists('27.86'&&'225.04', 'Testando os valores de desconto do inss e ir"');
        });
    }
  }

casper.test.begin('assertExists() tests', 8, function (test) {
    casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');

    formulario.testAutenticacao(casper);

    casper.then(function () {
        this.getResultsCount = function () {
            return casper.evaluate(function () {
                return __utils__.findAll('table').length;

            });
        };
        oldLines = this.getResultsCount();
        this.capture('teste5.png');
    });
    //Entrando na pagina de Cadastro de Funcionários
    casper.then(function () {
        this.click(x('//*[@id="buttonAddFunc"]/button'));
    });

    //Teste de inserção de funcionário e validação do formulário 
    formulario.testInserirFuncionaorio(casper, funcionario);


    //Verificando se o funcionário está sendo listado, alteração na quantidade de linhas
    casper.then(function () {
        test.assertElementCount('table', oldLines + 1, 'Verificando se houve alteração na quantidade de funcionários para mais');
    });
    casper.wait(3000, function () {
            this.echo("Adição do funcionário!");
        });
    casper.then(function () {
        oldLines = this.getResultsCount();
    });
    casper.then(function () {
            this.click(x('//*[@id="tabela' + (this.getResultsCount() - 1) + '"]/tbody/tr[2]/td[2]/button'));

     });
    
    formulario.testGerarFolhaSalarial(casper);

   /* casper.then(function () {
        this.click(x('//*[@id="tabela' + (this.getResultsCount() - 1) + '"]/tbody/tr[2]/td[3]/button'));

    });

    //Realizando o testes de atualização do funcionário
    formulario.testAtualizarFuncionario(casper);


    //Excluindo Funcionários
    casper.then(function () {
        this.click(x('//*[@id="tabela' + (this.getResultsCount() - 1) + '"]/tbody/tr[2]/td[4]/button'));

    });
    casper.wait(2000, function () {
        this.echo("Esperando Entrada no Sistema!");
    });


    //Verificando se houve diminuição de funcionários na lista
    casper.then(function () {
        test.assertElementCount('table', oldLines - 1, 'Verificando se houve alteração na quantidade de funcionários para menos');
    });
    casper.then(function () {

        this.capture('teste5.png');
    });*/
    casper.run(function () {
        test.done();
    });



});