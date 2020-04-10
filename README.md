# vwapp-react-bootstrap-4

Componentes bootstrap4 de forma mais legivel usando react.

[![NPM](https://img.shields.io/npm/v/vwapp-react-bootstrap-4.svg)](https://www.npmjs.com/package/vwapp-react-bootstrap-4) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação.

```bash
npm install --save vwapp-react-bootstrap-4
```

## Uso

```jsx
import React, { Component } from 'react'

import { Container } from 'vwapp-react-bootstrap-4'

class Example extends Component {
  render() {
    return (
      <Container fluid className="bg-dark">
        <p>Container fluid</p>
      </Container>
    )
  }
}
```

## Documentação

### 1. Container

Os contêineres são usados ​​para preencher o conteúdo dentro deles.

#### Propriedades:

* **fluid**: Faz o container ter a largura total. (Booleano) - Padrão false.

* **className**: Insere novos estilos para o container. (String) - Padrão null.

* **screen**: Cria containers responsivos. (String) - Padrão null.

  ![ex](https://user-images.githubusercontent.com/14116020/79019115-f3b96a80-7b4b-11ea-8600-1a3c6077c7c8.png)

#### Exemplo:

```jsx
<Container screen="sm" className="bg-dark">
  // Outros elementos...
</Container>
```

```html
<div class="container-sm bg-dark">
  // Outros elementos...
</div>
```

### 2. Grid

O sistema de grid do Bootstrap é construído com flexbox e permite até 12 colunas na página.

#### Componentes

* Row
* Col

#### Propriedades (Col):

As propriedades devem ser listadas de forma proporcional o primeiro elemento de **screens** tem como size o primeiro elemento de **sizes**.

* **screen**: Tipos de telas. (Lista) - Padrão automatico.

  - **"xs"**: Extra Small - Telas menores que 576px
  - **"sm"**: Small - Telas menores que 768px
  - **"md"**: Medium - Telas menores que 992px
  - **"lg"**: Large - Telas menores que 1200px
  - **"xl"**: Extra Large - Telas maiores que 1200px

* **size**: É um número que somando com as outras colunas da tag Row tem que dar exatamente 12. (Lista) - Padrão automatico.

#### Exemplo:

```jsx
<Row>
  <Col screens=["sm", "md"] sizes=["6", "3"]>
    // Elementos...
  </Col>
  <Col screens=["sm", "md"] sizes=["6", "9"]>
    // Elementos...
  </Col>
</Row>
```

```html
<div class="row">
  <div class="col-sm-6 cols-md-3">
    // Elementos...
  </div>
  <div class="col-sm-6 cols-md-9">
    // Elementos...
  </div>
</div>
```

### 2. Typography

Alguns componentes relacionados a tipografia.

#### Componentes

* Title
* BlockQuote
* Box
* Json
* Line
* BreakLine

#### Propriedades:

Pode se inserir qualquer atributo que as tags h1-h5 suportam no react. (className, id, ...).

#### Exemplo:

```jsx
<Title size="xl" subtitle="Subtitulo.">Ola mundo h1!</Title>
<Title size="lg">Ola mundo h2!</Title>
<Title size="md">Ola mundo h3!</Title>
<Title size="sm">Ola mundo h4!</Title>
<Title size="xs">Ola mundo h5!</Title>
<BlockQuote>Ola mundo</BlockQuote>
<Box>Ctrl + P</Box>
<Json values={{name: "Victor Deon", job: "Software Enginer"}} />
<Line />
<BreakLine />
```

```html
<h1>Ola mundo h1! <small>Subtitulo.</small></h1>
<h2>Ola mundo h2!</h2>
<h2>Ola mundo h3!</h2>
<h2>Ola mundo h4!</h2>
<h2>Ola mundo h5!</h2>
<blockquote class="blockquote-footer">Ola mundo</blockquote>
<kbd>Ctrl + P</kbd>
<pre>{
  "name": "Victor Deon",
  "job": "Software Engineer"
}</pre>
<hr />
<br />
```

## Constantes de classe para estilos

Contante default **style** com ela você consegue inserir as classes usando uma lista.

```jsx
import styles, { COLORS } from 'vwapp-react-bootstrap-4';

const { backgroundDark, textWhite } = COLORS;

<Container fluid className={style([backgroundDark, textWhite])}>
  // ...
</Container>
```

#### 1. COLORS

* **textPrimary**: 'text-primary',
* **textSuccess**: 'text-success',
* **textInfo**: 'text-info',
* **textWarning**: 'text-warning',
* **textDanger**: 'text-danger',
* **textSecundary**: 'text-secondary',
* **textWhite**: 'text-white',
* **textDark**: 'text-dark'
* **backgroundPrimary**: 'bg-primary',
* **backgroundSuccess**: 'bg-success',
* **backgroundInfo**: 'bg-info',
* **backgroundWarning**: 'bg-warning',
* **backgroundDanger**: 'bg-danger',
* **backgroundSecundary**: 'bg-secondary',
* **backgroundDark**: 'bg-dark',
* **backgroundLight**: 'bg-light'

#### 2. TYPOGRAPHY

* **bold**: 'font-weight-bold',
* **italic**: 'font-italic',
* **light**: 'font-weight-light',
* **small**: 'small',
* **big**: 'lead',
* **alignLeft**: 'text-left',
* **alignRight**: 'text-right',
* **alignCenter**: 'text-center',
* **justify**: 'text-justify',
* **break**: 'text-break',
* **noDecoration**: 'text-decoration-none',
* **lowercase**: 'text-lowercase',
* **uppercase**: 'text-uppercase',
* **capitalize**: 'text-capitalize',
* **listUnstyled**: 'list-unstyled'

## Contribuir

#### 1. Como rodar o ambiente de desenvolvimento:

Rode os dois comandos abaixo em 2 abas diferentes. O primeiro comando vai ficar observando modificações do seu pacote e o segundo
comando consome essas modificações no html.

No diretorio raiz rode o npm start

```
npm start
```

No diretorio example rode o npm start.

```
cd example
npm start
```

#### 2. Como instalar ou remove um pacote.

Para instalar um novo pacote tem que fazer o seguinte comando:

```
npm install --save-dev nome-do-pacote
```

Com ele instalado tem que coloca-lo no package.json

```json
"peerDependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
},
"devDependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
}
```

Com teste se esse pacote está sendo utilizado, caso não rode o npm install e reinicie os servidores.

#### 3. Publicar no npmjs

1. Crie uma conta no https://www.npmjs.com/
2. Execute no terminal npm login e logar com as credenciais criadas no npmjs
3. Execute ```npm publish``` na pasta do projeto
4. E então use em outros projetos!

#### 4. Publicar documentação github pages

Rode o comando para criar uma pagina com a build do projeto example do seu repositório.

```
npm run deploy
```

#### 5. Atualizando um projeto.

Versões: MAJOR.MINOR.PATCH

* **MAJOR**: Versão em que fizeste modificações incompatives com versões anteriores, ou seja, que irá quebrar algo anteriormente feito.
* **MINOR**: Quando você adicionar funcionalidades que são compativeis com versões anteriores.
* **PATCH**: Correções de erros/bugs compativeis com versões anteriores.

## Licença

MIT © [VictorDeon](https://github.com/VictorDeon)