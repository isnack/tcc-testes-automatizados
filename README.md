# TCC-Uso-Testes-Automatizados-No-Desenvolvimento-Software
TCC Unit test integration functional

[![Build Status](https://travis-ci.org/isnack/tcc-testes-automatizados.svg?branch=master)](https://travis-ci.org/isnack/tcc-testes-automatizados) [![Coverage Status](https://coveralls.io/repos/github/isnack/tcc-testes-automatizados/badge.svg?branch=master)](https://coveralls.io/github/isnack/tcc-testes-automatizados?branch=master)

## Instruções de instalação e uso

## Passo 1 
* Instalar o Python
[Link](https://www.python.org/downloads/)

## Passo 2 
* Instalar e configurar o mongoDB
[Link](https://www.mongodb.com/download-center)
* Criar o diretório a seguir 
C:\data\db

## Passo 3 
* Instalar o NodeJS
[Link](https://nodejs.org/en/download/)

## Passo 4 
* **npm install** 
* Abrir o arquivo mongod.exe encontrado na pasta bin da instalação do mongodb
* Em janelas separadas executar os seguintes comandos
**npm run restServer** e
**npm start**

## Passo 5
* Execução dos testes unitários e de integração
**npm test**
* Execução dos testes funcionais

* Antes de realizar o teste executar a url de criação de usuário http://localhost:3000/api/createrAdminUser e posteriormente rodar o comando a seguir 
**npm run testFunctional**

* Execução do relatório de cobertura
**npm run coveralls-local**
