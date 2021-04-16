---
layout: post
date: 2021-04-16 01:55:22
title: "Formulário HTML + Netlify "
description: Configurando o Netlify para enviar formulários html via e-mail
category: HTML
color: "#2DA0C3"
tags:
  - HTML
---
### Nesse post vou explicar como receber um formulário HTML via e-mail usando o netlify

**Repositório do Formulário HTML -** <https://github.com/FranciscoBSpadaro/html_formulario_netlify>

**Formulário HTML -** <https://fbs-form.netlify.app/formulario.html>

**Netlify -**  <https://www.netlify.com/>

Como vocês já sabem meu site , blog , e projetos são hospedados no netlify , esse serviço gratuito usa o repositorio github para colocar no ar nossos sites.

O Netlify possui uma opção de Forms ou Formulários , para enviar notificações  via email , slack e webhook.

Para realizar esse processo é simples .

uma vez que vc ja tem o site no ar você precisa abrir a opçao settings no netlify na pagina do seu site formulario .

![](/assets/img/netlify1.jpg "Netlify")

Na opção forms selecione qual forma de recebimento de notificação no meu caso escolhi o e-mail.

Agora é necessário colocar um parâmetro de configuração do Netlify dentro da tag form do seu html , para que o netlify identifique esse formulário quando fazer a build do seu site e colocar ele no ar.

```html
  <!-- Início do formulário -->
        <form name="f_cadastro" method="POST" data-netlify="true">
```

Na minha tag de formulário tem o nome que escolhi , f_cadastro , e o método POST , somente com esse método o netlify faz o envio do formulário no email , e a tag de identificação para o netlify realizar a operação é  **data-netlify="true"**

O Netlify tem sistema de proteção de spam então o formulário precisa ser preenchido com informações verdadeiras .

![](/assets/img/tks.jpg "Concluído")



Se tudo estiver correto ao preencher o formulário você vai receber essa tela de aviso.

FIM !