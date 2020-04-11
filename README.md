# vwapp-react-components

Componentes customizados usando o bootstrap4 de forma mais legivel em react.

[![NPM](https://img.shields.io/npm/v/vwapp-react-components.svg)](https://www.npmjs.com/package/vwapp-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação.

```bash
npm install --save vwapp-react-components
```

## Uso

```jsx
import React, { Component } from 'react'

import { Container } from 'vwapp-react-components'

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

#### Propriedades especificas (Col):

As propriedades devem ser listadas de forma proporcional, ou seja, o primeiro elemento de **screens** tem como size o primeiro elemento de **sizes**.

* **size**: É um número que somando com as outras colunas da tag Row tem que dar exatamente 12. (Lista) - Padrão automatico.

* **screen**: Tipos de telas. (Lista) - Padrão automatico.

  - **"xs"**: Extra Small - Telas menores que 576px
  - **"sm"**: Small - Telas menores que 768px
  - **"md"**: Medium - Telas menores que 992px
  - **"lg"**: Large - Telas menores que 1200px
  - **"xl"**: Extra Large - Telas maiores que 1200px

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

### 3. Typography

Alguns componentes relacionados a tipografia.

#### Componentes

* Title
* BlockQuote
* Box
* Json
* Line
* BreakLine

#### Propriedades especificas:

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

### 4. Table

Componentes relacionados a criação de tabelas.

#### Componentes

* Table
* TableLine
* TableCol

#### Propriedades especificas (Table):

* **striped**: Adiciona listas de zebra a uma tabela. (Booleano - default false).
* **bordered**: Adiciona bordas em todos os lados da tabela e células. (Booleano - default false).
* **borderless**: Remove todas as bordas da tabela. (Booleano - default false).
* **hover**: Adiciona listas de zebra a tabela ao passar o mouse sobre ela. (Booleano - default false).
* **dark**: Deixa a tabela toda escura. (Booleano - default false).
* **headerDark**: Deixa o header da tabela escuro. (Booleano - default false).
* **small**: Deixa a tabela menos espaçada. (Booleano - default false).
* **attrTHeader**: Atributos adicionais para a tag ```<theader>```, por exemplo, className, id, ...
* **attrHeaderLine**: Atributos adicionais para a tag ```<tr>``` do header, por exemplo, className, id, ...
* **attrHeaderItens**: Atributos adicionais para a tag ```<th>``` do header, por exemplo, className, id, ...
* **attrTBody**: Atributos adicionais para a tag ```<tbody>```, por exemplo, className, id, ...

#### Propriedades especificas (TableCol):

* **bold**: A presença desse atributo booleano faz com que a coluna seja do tipo ```<th>```. (Booleano - default false = ```<td>```)

#### Exemplo:

```jsx
<Table hover bordered headerDark headers={["Nome", "Telefone"]} attrTBody={{id: "my-tbody"}}>
  <TableLine>
    <TableCol id="jp" bold>João</TableCol>
    <TableCol>(61) 99928-4948</TableCol>
  </TableLine>
  <TableLine>
    <TableCol bold>Maria</TableCol>
    <TableCol>(61) 93840-2233</TableCol>
  </TableLine>
</Table>
```

```html
<div class='table-responsive'>
  <table class="table table-hover table-bordered">
    <thead class="thead-dark">
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
      </tr>
    </thead>
    <tbody id="my-tbody">
      <tr>
        <th id="jp">João</th>
        <td>(61) 99928-4948</td>
      </tr>
      <tr>
        <th>Maria</th>
        <td>(61) 93840-2233</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 5. Image

Componentes relacionados a criação de imagens.

#### Componentes

* Image

#### Propriedades especificas:

* **rounded**: Adiciona as bordas da imagem arredondados. (Booleano - default false).
* **circle**: Faz a imagem ficar circular. (Booleano - default false).
* **thumbnail**: Coloca bordas na imagem. (Booleano - default false).
* **center**: Centraliza a imagem. (Booleano - default false).

#### Exemplo:

```jsx
<Image circle center src="img.png" alt="Imagem" />
```

```html
<img className="img-fluid rounded-circle mx-auto d-block" src="img.png" alt="Imagem" />
```

### 6. Alert

Componentes relacionados a criação de alertas.

#### Componentes

* Alert

#### Propriedades especificas:

* **dismissible**: Faz aparecer um botão para remover o alerta da tela.

* **type**: Tipo de alerta. (String - default primary).

  - **success**: Alerta de sucesso (verde).
  - **info**: Alerta de informação (azul claro).
  - **warning**: Alerta de aviso (amarelo).
  - **danger**: Alerta de perigo (vermelho).
  - **primary**: Alerta padrão (azul).
  - **secondary**: Alerta secundário (cinza).
  - **dark**: Alerta negro (negro).
  - **light**: Alerta branco (branco).

#### Exemplo:

```jsx
<Alert type="success" dismissible>
  <b>Parabéns</b> Você venceu!
</Alert>
```

```html
<div class="alert alert-success alert-dismissible fade show">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <b>Parabéns</b> Você venceu!
</div>
```

### 7. Button

Componentes relacionados a criação de botões.

#### Componentes

* ButtonGroup
* Button

#### Propriedades especificas (Button):

* **outline**: Faz com que a cor de preenchimento vire cor de borda. (Booleano - default false).

* **disabled**: Botão desabilitado. (Booleano - default false).

* **dropdown**: Objeto com a seguinte sintaxe: (Objeto - default null).

  ```jsx
  // Atributos com ... pode ser qualquer um que se encaixe em um button ou div. (id, className, e etc...)
  // Os citados são obrigatórios (title, onClick) para cada item.
  {
    ...,
    itens: [
      {title: "Título do item.", onClick: () => {...}, ...},
      {title: "Título do item.", onClick: () => {...}, ...},
      ...
    ]
  }
  ```

* **size**: Tamanho do botão. (String - default null)

  - **lg**: Largo.
  - **sm**: Curto.
  - **block**: Preenche todo o espaço da tela na qual foi inserido.

* **type**: Tipo de botão. (String - default null).

  - **primary**: Botão com preenchimento azul.
  - **secondary**: Botao com preenchimento cinza.
  - **success**: Botao com preenchimento verde.
  - **info**: Botão com preenchimento azul claro.
  - **warning**: Botão com preenchimento amarelo.
  - **danger**: Botão com preenchimento vermelho.
  - **dark**: Botão com preenchimento escuro.
  - **light**: Botão com preenchimento claro.
  - **link**: Botão com preenchimento transparente.

#### Propriedades especificas (ButtonGroup):

Por padrão os botões são alinhados horizontalmente.

* **vertical**: Agrupa os botões na vertical. (Booleano - default false)

* **size**: Tamanho dos botões dentro do grupo. (String - default null)

  - **lg**: Largo.
  - **sm**: Curto.

#### Exemplo:

```jsx
<ButtonGroup>
  <Button type="dark" onClick={() => console.log("Sony")}>Sony</Button>
  <Button
    type="dark"
    dropdown={{
      id: "my-drop",
      className: "my-class",
      items: [
        {title: "Tablet", onClick: () => console.log("Tablet"), id: "my-item"},
        {title: "Smartphone", onClick: () => console.log("Smartphone")},
      ]
    }}
  />
</ButtonGroup>
```

```html
<div class="btn-group">
  <button type="button" class="btn btn-dark">Sony</button>
  <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <div class="dropdown-menu">
    <button class="btn btn-link dropdown-item" id="my-item">Tablet</button>
    <button class="btn btn-link dropdown-item">Smartphone</button>
  </div>
</div>
```

### 8. Badge

Componentes relacionados a criação de badges.

#### Componentes

* Badge

#### Propriedades especificas:

* **rounded**: Faz o badge ficar mais arredondado. (Booleano - default false).

* **type**: Tipo de Badge. (String - default primary).

  - **success**: Badge de sucesso (verde).
  - **info**: Badge de informação (azul claro).
  - **warning**: Badge de aviso (amarelo).
  - **danger**: Badge de perigo (vermelho).
  - **primary**: Badge padrão (azul).
  - **secondary**: Badge secundário (cinza).
  - **dark**: Badge negro (negro).
  - **light**: Badge branco (branco).

#### Exemplo:

```jsx
<Badge type="success" rounded>Você venceu!</Badge>
```

```html
<span class="badge badge-success badge-pill">Você venceu!</span>
```

### 9. Badge

Componentes relacionados a criação de barras de progresso.

#### Componentes

* ProgressBar
* ProgressBarSlice

#### Propriedades especificas (ProgressBarSlice):

* **progress**: Valor entre 0 e 100. É o nível que a barra de progresso terá. (String - default 0)

* **type**: Tipo de Badge. (String - default primary).

  - **success**: Badge de sucesso (verde).
  - **info**: Badge de informação (azul claro).
  - **warning**: Badge de aviso (amarelo).
  - **danger**: Badge de perigo (vermelho).
  - **primary**: Badge padrão (azul).
  - **secondary**: Badge secundário (cinza).
  - **dark**: Badge negro (negro).
  - **light**: Badge branco (branco).

#### Exemplo:

```jsx
<ProgressBar>
  <ProgressBarSlice type="success" progress="30">Iniciante</ProgressBarSlice>
  <ProgressBarSlice type="warning" progress="40">Médio</ProgressBarSlice>
  <ProgressBarSlice type="danger" progress="30">Profissional</ProgressBarSlice>
</ProgressBar>
```

```html
<div class="progress">
  <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:40%">
    Free Space
  </div>
  <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width:10%">
    Warning
  </div>
  <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:20%">
    Danger
  </div>
</div>
```

### 10. Spinners

Componentes relacionados a criação de spinners.

#### Componentes

* Spinner

#### Propriedades especificas:

* **grow**: Spinner em formato de circulo preenchido. (Booleano - default false).

* **type**: Tipo de Spinner. (String - default primary).

  - **primary**: Spinner padrão (azul).
  - **success**: Spinner de sucesso (verde).
  - **info**: Spinner de informação (azul claro).
  - **warning**: Spinner de aviso (amarelo).
  - **danger**: Spinner de perigo (vermelho).
  - **secondary**: Spinner secundário (cinza).
  - **dark**: Spinner negro (negro).
  - **light**: Spinner branco (branco).

#### Exemplo:

```jsx
<Spinner grow type="info" />
```

```html
<div class="spinner-grow text-info"></div>
```

### 11. Pagination

Componentes relacionados a criação de paginações.

#### Componentes

* Pagination

#### Propriedades especificas:

* **totalItens**: Total de itens que será paginado. (Inteiro - obrigatório)

* **activePage**: Página ativa pelo usuário na função handlePagination. (Inteiro - obrigatório)

* **itemPerPage**: Quantidade de itens que aparecerá por páginas. (Inteiro - default 20)

* **pageRange**: Quantidade de páginas que irá aparecer no componente de cada vez. (Inteiro - default 5)

* **firstPageText**: Título ou Icone que ao clicar vai voltar para a primeira página. (String - default "Primeiro")

* **lastPageText**: Título ou Icone que ao clicar vai redirecionar para a última página. (String - default "Último")

* **prevPageText**: Título ou Icone que ao clicar vai voltar para a página anterior. (String - default "<<")

* **nextPageText**: Título ou Icone que ao clicar vai avançar para a próxima página. (String - default ">>")

* **handlePagination**: Função que irá tratar a paginação. (Função - Obrigatório).

#### Exemplo:

```jsx
<Pagination
  totalItens={60}
  itemPerPage={20}
  activePage={this.state.activePage}
  handlePagination={this.__handlePagination}
/>
```

```html
<ul class="pagination">
  <li class="page-item disabled"><a class="page-link" href="#" aria-label="Go to first page">Primeiro</a></li>
  <li class="page-item disabled"><a class="page-link" href="#" aria-label="Go to previous page">&lt;&lt;</a></li>
  <li class="page-item active"><a class="page-link text-white" href="#" aria-label="Go to page number 1">1</a></li>
  <li class="page-item"><a class="page-link" href="#" aria-label="Go to page number 2">2</a></li>
  <li class="page-item"><a class="page-link" href="#" aria-label="Go to page number 3">3</a></li>
  <li class="page-item"><a class="page-link" href="#" aria-label="Go to next page">&gt;&gt;</a></li>
  <li class="page-item"><a class="page-link" href="#" aria-label="Go to last page">Último</a></li>
</ul>
```

### 12. BreadCrumbs

Componentes relacionados a criação de breadcrumbs.

#### Componentes

* BreadCrumb

#### Propriedades especificas:

* **navigation**: Lista de objetos com os dados de navegação do breadcrumb. (Lista - default []).

* **redirectFunction**: Função responsável por fazer o redirecionamento ao clicar no link do breadcrumb. (Função - obrigatório).

#### Exemplo:

```jsx
<BreadCrumb id="my-bread">
  <BreadCrumbItem url="/" id="my-bread-item" redirect={(url, state) => this.__redirectTo(url, state)}>
    Home
  </BreadCrumbItem>
  <BreadCrumbItem url="/profile" redirect={(url, state) => this.__redirectTo(url, state)}>
    Perfil
  </BreadCrumbItem>
  <BreadCrumbItem url="/profile/calculo-1/detail" state={{ id: 1 }} redirect={(url, state) => this.__redirectTo(url, state)}>
    Calculo 01
  </BreadCrumbItem>
</BreadCrumb>
```

```html
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <button id="home" type="button" class="btn btn-link">Home</button>
  </li>
  <li class="breadcrumb-item">
    <button type="button" class="btn btn-link">Perfil</button>
  </li>
  <li class="breadcrumb-item">
    <button type="button" class="btn btn-link">Calculo 01</button>
  </li>
</ul>
```

### 13. List

Componentes relacionados a criação de listas.

#### Componentes

* List
* ListItem

#### Propriedades especificas (List):

* **clean**: Remove as bordas da lista. (Booleano - default false).

* **horizontal**: Reorganiza a lista na horizontal. (Booleano - default false).

* **link**: Transforma a lista de itens em uma lista de links. (Booleano - default false).

#### Propriedades especificas (ListItem):

* **actived**: Estiliza o item ativo. (Booleano - default false - tipo item).

* **disabled**: Desabilita o link. (Booleano - default false - tipo link).

* **handleClick**: Ao clicar no link realizar alguma ação. (Função - tipo link obrigatório.)

#### Exemplo:

```jsx
<List link clean>
  <ListItem handleClick={() => console.log('Link 01')}>Link 01</ListItem>
  <ListItem handleClick={() => console.log('Link 02')}>Link 02</ListItem>
</List>

<List>
  <ListItem actived>Item 01</ListItem>
  <ListItem>Item 02</ListItem>
</List>
```

```html
<div class="list-group list-group-flush">
  <a href="#" class="list-group-item list-group-item-action active">Link 01</a>
  <a href="#" class="list-group-item list-group-item-action">Link 02</a>
</div>

<ul class="list-group">
  <li class="list-group-item active">Item 01</li>
  <li class="list-group-item">Item 02</li>
</ul>
```

## Constantes de classe para estilos

Contante default **style**, com ela você consegue inserir as classes usando uma lista.

```jsx
import styles, { COLORS } from 'vwapp-react-components';

const { backgroundDark, textWhite } = COLORS;

<Container fluid className={style([backgroundDark, textWhite])}>
  // ...
</Container>
```

#### 1. COLORS

* **textPrimary**: Cor do texto azul.
* **textSuccess**: Cor do texto verde.
* **textInfo**: Cor do texto azul claro.
* **textWarning**: Cor do texto amarelo.
* **textDanger**: Cor do texto vermelho.
* **textSecundary**: Cor do texto cinza.
* **textWhite**: Cor do texto branco.
* **textDark**: Cor do texto escuro.
* **backgroundPrimary**: Fundo azul.
* **backgroundSuccess**: Fundo verde.
* **backgroundInfo**: Fundo azul claro.
* **backgroundWarning**: Fundo amarelo.
* **backgroundDanger**: Fundo vermelho.
* **backgroundSecundary**: Fundo cinza.
* **backgroundDark**: Fundo escuro.
* **backgroundLight**: Fundo claro.

#### 2. TYPOGRAPHY

* **bold**: Texto em negrito.
* **italic**: Texto em italico.
* **light**: Texto mais claro.
* **small**: Texto pequeno.
* **big**: Texto grande.
* **alignLeft**: Texto a esquerda.
* **alignRight**: Texto a direita.
* **alignCenter**: Texto ao centro.
* **justify**: Texto justificado.
* **break**: Fazer o texto quebrar linha se chegar ao final da pagina.
* **noDecoration**: Remove o underline em baixo do link, ```<a>```.
* **lowercase**: Texto em caixa baixa.
* **uppercase**: Texto em caixa alta.
* **capitalize**: Primeira letra do texto maiuscula.
* **listUnstyled**: Remove os pontos da lista.

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
"dependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
},
"peerDependencies": {
  "nome-do-pacote": "^versao",
  "...": "..."
}
```

Com isso, teste se esse pacote está sendo utilizado, caso não rode o npm install e reinicie os servidores.

#### 3. Publicar no npmjs

1. Crie uma conta no https://www.npmjs.com/
2. Execute no terminal ```npm login``` e logar com as credenciais criadas no npmjs
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

Criado a partir do pacote: [Create React Library](https://github.com/transitive-bullshit/create-react-library)
