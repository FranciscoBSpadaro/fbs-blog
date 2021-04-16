---
layout: post
date: 2021-04-15 08:28:10
title: Blockchain com Node
description: Exemplo de blockchain com Node
category: nodejs
color: "#EB7728"
tags:
  - node
  - Blockchain
  - Javascript
---
### Nesse post você vai ver um exemplo de uma pequena blockchain usando node

**Stacks e módulos** 

**Node js -**  <https://nodejs.org/en/>

**Crypto-js -** <https://www.npmjs.com/package/crypto-js>

**SHA256** 

Link do código completo no github 

<https://github.com/FranciscoBSpadaro/BlockChain_Example>

### Iniciando o código blockchain

Crie uma pasta , abra essa pasta com o vscode , abra o terminal vscode e digite  **node -v**  para verificar se o node está funcionando e exibindo sua versão .

cria um arquivo na pasta raiz com o nome block.js  esse arquivo vai ficar o código javascript como linguagem orientada objeto , iremos criar uma classe construtora onde nela iremos ter os atributos de uma blockchain onde vai ter o bloco composto de Timestamp onde marca o tempo , lasthash é o hash do bloco anterior e hash é o algoritmo de criptografia SHA256.

```javascript
class Block{

    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
```

Com a sintaxe this vamos conseguir instanciar os objetos dentro da classe construtora .

Agora devemos converter a classe orientada objetos para string para podemos debugar o codigo ou receber os logs para avaliar o funcionamento do código

```javascript
    toString(){
        return `Block =
                Timestamp = ${this.timestamp}
                lastHash = ${this.lastHash.substring(0, 10)}
                hash = ${this.hash.substring(0,10)}
                data = ${this.data}`;
    }
```

com essa função acima é possível converter os objetos em Strings.

o Hash possui 32 caracteres no código agente pode limitar a exibição dos caracteres usando a sintaxe substring.  mas isso não é obrigatório , se apagar .substring(0,10) os logs vao exibir o hash completo.

Agora temos que exportar esssa classe para poder executar um script de teste 

```javascript
module.exports = Block;
```

no momento o código deve ficar assim

```javascript
class Block{

    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block =
                Timestamp = ${this.timestamp}
                lastHash = ${this.lastHash.substring(0, 10)}
                hash = ${this.hash.substring(0,10)}
                data = ${this.data}`;
    }
}

module.exports = Block;
```

agora criar o arquivo teste.js na pasta raiz para testar nosso bloco

```javascript
const Block = require('./block.js');

const block = new Block('1234', '1234567ASDFGHJ', '12345678ASDFGHJKL', '100');
console.log(block.toString());
```

esses 4 dados são aleatórios para testes , no caso são os 4 elementos do blockchain esse teste simula um novo bloco.

executar o comando  **node teste.js**   para  teste

![](/assets/img/block1.jpg)

ira retornar algo como no print acima , podemos ver que o hash e last hash não exibiu 32 caracteres mas poderia , agora sabemos que está funcionando já podemos continuar com o código

**Criação do bloco gênesis** 

Genesis é o bloco de origem da block chain onde temos os valores padrões para o timestamp , lasthash, hash e data .

Criando a função genesis usando o identificador static , static permite chamar uma função sem ter que fazer uma nova instancia da clase block sem criar novos arquivos , podendo chama-la no arquivo de testes usando Block.genesis.

```javascript
    static genesis(){
        
        return new this('Genesis time', '------', 'JHASHID3233', []);
    }
```

Genis time = timestamp , '-----' = lasthash no caso não temos um last hash pois esse é o primeiro bloco

hash recebe valores de exemplo 'JHASHID3233' , e a data =  recebe um array = \[] 

Função genesis criada.

![](/assets/img/genesis.jpg "genesis block")



**Função MineBlock**

agora podemos gerar novos blocks usando a informação do bloco genesis , usando sintaxe static novamente os argumentos vem do ultimo bloco.

```javascript
    static mineBlock(lastBlock, data){

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'a-fazer-hash';
      
        return new this(timestamp, lastHash, hash, data);
        
    }
```

lastBlock o bloco anterior , data é os dados que vamos armazenar.

Date.now é um objeto do javascript com a função .now que é um valor do tempo que se passou desde 1970 até o presente momento.

const lastHash é a constante do valor do hash anterior lastBlock.hash

ainda nao fazemos uma funçao para gerar um valor de codificaçao randomico para o hash