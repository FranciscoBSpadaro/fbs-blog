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

##### Stacks de modulos necessarios :

**Node js -**  <https://nodejs.org/en/>

**Crypto-js -** <https://www.npmjs.com/package/crypto-js>

**SHA256** 

Link do código completo no github 

<https://github.com/FranciscoBSpadaro/BlockChain_Example>

### Iniciando o código blockchain

Crie uma pasta , abra essa pasta com o vscode , abra o terminal vscode e digite node -v para verificar se o node está funcionando e exibindo sua versão .

cria um arquivo na pasta raiz com o nome block.js  esse arquivo vai ficar o nosso código javascript como linguagem orientada objeto , iremos criar uma classe construtora onde nela iremos ter os atributos de uma blockchain onde vai ter o bloco composto de Timestamp onde marca o tempo , lasthash é o hash do bloco anterior ,  hash é o algoritmo de criptografia SHA256.

```javascript
class Block{

    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
```

Com a sintaxe this agente consegue instanciar os objetos da classe construtora .

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

o Hash possui 32 caracteres no código agente consegue limitar a exibição dos caracteres usando a sintaxe substring.  mas isso não é obrigatório , se apagar .substring(0,10) os logs vao exibir o hash completo.

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

agora criar o arquivo teste.js  para testar nosso bloco

```javascript
const Block = require('./block.js');

const block = new Block('1234', '1234567ASDFGHJ', '12345678ASDFGHJKL', '100');
console.log(block.toString());
```

esses 4 dados sao aleatorios para testes , no caso sao os 4 elementos do blockchain

executar o comando node. teste.js para  teste

![](/assets/img/block1.bmp)

ira retornar algo como no print acima , agora sabemos que está funcionando já podemos continuar com o código