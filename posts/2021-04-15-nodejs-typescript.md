---
layout: post
date: 2021-04-15 03:22:57
title: Nodejs + TypeScript
description: TypeScript, Sucrase, ESLint, Express, MongoDB, Mongoose e outras ferramentas
category: Nodejs
color: "#D6BA32"
tags:
  - Nodejs
---
# Projeto de um mini app para aprendizado

## Esse é um tutorial de passo a passo explicando como desenvolvi meu primeiro projeto de estudo com nodejs e typescript.

### Parte 1 - stack de módulos e ferramentas utilizadas

**Nodejs -** <https://nodejs.org/en/>

Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation

**Typescript -** <https://www.typescriptlang.org/>

TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript

**Sucrase  -**  <https://github.com/alangpierce/sucrase>

O Sucrase é uma alternativa ao Babel que permite um desenvolvimento muito rápido. O Sucrase assume que você está desenvolvendo em um navegador recente ou em uma versão recente do Node.js, acelerando a sua experiência em desenvolvimento.\
Ele se concentra na compilação de extensões da linguagem não-padrão, como JSX, TypeScript e Flow.

* O Sucrase não verifica se há erros no seu código, ele apenas produz código JS válido. Sempre verifique o código que você irá fornecer;
* Ele também não produz código para navegadores antigos;
* Não é um verificador de letras, ou seja, processa cada arquivo isoladamente.
* É benéfico principalmente no desenvolvimento mas, às vezes, Babel será mais adequado para compilações de produção.

O Sucrase visa o desenvolvimento de builds. Obtém ganhos de velocidade significativos provenientes de uma redução no escopo dos objetivos do compilador.

**Prettier -** <https://prettier.io/>

* ESLint: Responsável por identificar padrões de código em desacordo com as regras pré-estabelecidas.
* Prettier: Responsável por formatar o código de acordo com essas regras.

**Eslint -** <https://eslint.org/>

O ESLint analisa estaticamente seu código para encontrar problemas rapidamente. ESLint é integrado à maioria dos editores de texto e você pode executar o ESLint como parte de seu pipeline de integração contínua.

**Express -** <https://expressjs.com/pt-br/>

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

Com uma Variedade de métodos utilitários HTTP e middleware a seu dispor,  para criar uma API robusta é rápido e fácil.

**MongoDB -** <https://www.mongodb.com/>

MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas ' Schemas ' 

**Mongoose -** <https://mongoosejs.com/>

Mongoose é uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono. O Mongoose oferece suporte a promessas 'Promise ' e retornos de chamada.

**Docker -** <https://www.docker.com/>

se você não sabe nada de docker já recomendo assistir ao video.

<iframe width="760" height="415" src="https://www.youtube.com/embed/yb2udL9GG2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

**Cors -** <https://www.npmjs.com/package/cors>

CORS é um pacote node.js para fornecer um middleware Connect / Express que pode ser usado para habilitar CORS com várias opções.

**Insomnia -**  <https://insomnia.rest/download>

Comece a construir, projetar e testar melhores APIs por meio do desenvolvimento de especificações conduzidas por pipelines de CI / CD APIOps.

### Parte 2 - Iniciando o Projeto

esse app consiste em se comunicar com o banco de dados mongodb instalado no **docker** utilizando o **Insomnia**  para enviar metodos GET/POST no formato json para inserir as informações no banco de dados.

o projeto vai usar o Eslint que irar corrigir os erros de identação no codigo junto com o prettier . 

o sucrase ira converter o código typescript para javascript para o ambiente de produção / build 

Antes de iniciar lembre de instalar o nodejs  , apenas baixe e instale

Crie uma pasta para o projeto , vamos usar o yarn para instalar os módulos e dependencias do projeto

1 - yarn init -y

criado o packge.json 

O `package.json` é um arquivo de configuração utilizado para estipular e configurar dependências do seu projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados. Através dele conseguimos deixar claro uma "receita" para executar um projeto.

2 - Abra o vscode e selecione a pasta do projeto , abra o terminal e instale a primeira dependência . 

![](/assets/img/vs1.jpg "yarn add -D typescript sucrase")

```
yarn add -D typescript sucrase
```

toda linha de comando com o -D  significa uma dependencia de Developer ou apenas modo de desenvolvimento. módulos que nao vão ser usados em produção

2 - criar a pasta src ' source ' do projeto com o nome index.js para começar a fazer os teste

![](/assets/img/vs2.jpg "mkdir src")

```
mkdir src
touch src/index.ts
```



no arquivo index colocar o código abaixo  para teste , obs ao salvar esse código o eslint iria converter ele para um código mais limpo. mas ainda não configuramos o eslint. depois veremos como vai ficar o código toda vez que salvar um arquivo e o eslint corrigir automaticamente 

![](/assets/img/vs3.jpg)



agora abrir o arquivo package.json e criar o script para execução do código .

![](/assets/img/vscd1.jpg)

adicionando essa linha de scripts com o nome de "dev" e build ' ja podemos executar o comando

yarn dev

![](/assets/img/vsss2.jpg)



se apareceu o numero 5 no terminal tudo certo até aqui !!