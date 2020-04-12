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

Além das propriedades especificas de cada componente, também pode ser inserido outras propriedades como: id, className, ...

### 1. Pagination

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

### 2. FormFields

Componentes relacionados a criação de formulários. Usado em conjunto com libs como [react-final-form](https://github.com/final-form/react-final-form), [redux-form](https://github.com/redux-form/redux-form) e [formik](https://github.com/jaredpalmer/formik).

O mais aconselhado é o **react-final-form**.

#### Componentes

* InputField
* CheckField
* TextAreaField
* SelectField
* RangeField
* FileField

#### Propriedades especificas (Geral):

* **name**: Nome do atributo que irá ser populado pelo usuário. É esse atributo que irá para a submissão do formulário, ele deve ser único. (String - Obrigatório)

* **id**: Identificado do campo no formulário. (String - Para o CheckField é obrigatório, para os outros ele é o atributo name.)

* **label**: Label que acompanhará o input. (String - Opcional)

* **component**: Componente do input. É aqui que fica os componentes citados acima. (Component - Obrigatório.)

* **disabled**: Desativa o component. (Booleano - Opcional)

* **className**: Conjunto de classes dos campos. (String - Opcional)

#### Propriedades especificas (InputField)

* **placeholder**: Leve descrição do campo. (String - Opcional)

* **size**: Tamanho do input: "sm", "md", "lg". (String - padrão "mg")

* **readOnly**: Fazer o campo ser um texto só de leitura. (Booleano - default false)

#### Propriedades especificas (TextAreaField)

* **placeholder**: Leve descrição do campo. (String - Opcional)

* **size**: Tamanho do input: "sm", "md", "lg". (String - padrão "mg")

* **readOnly**: Fazer o campo ser um texto só de leitura. (Booleano - default false)

* **rows**: Tamanho da caixa do campos. (Inteiro - Opcional)

#### Propriedades especificas (SelectField)

* **placeholder**: Leve descrição do campo. (String - Opcional - defalt "Selecione uma opção")

* **size**: Tamanho do input: "sm", "md", "lg". (String - padrão "mg")

* **options**: Lista de opções. (Lista de Objetos (title, value) - Obrigatório)

* **type**: É obrigatório colocar o type como "select" nesse input. (String - Obrigatório - valor "select")

* **multiple**: Transforma o select em escolhas multiplas. (Booleano - default false)

#### Propriedades especificas (RangeField)

* **max**: Valor máximo que o range pode alcançar. (Inteiro - default 100)

* **min**: Valor mínimo que o range pode alcançar. (Inteiro - default 0)

#### Propriedades especificas (CheckField)

* **inline**: Coloca o conjunto de campos com esse atributo na horizontal. (Booleano - Opcional)

* **type**: Tipo do input. (String - Obrigatória)

  - **checkbox**: Input do tipo checkbox, retorna true ou false.
  - **radio**: Input do tipo radio, retorna o valor inserido no atributo **value** do radio.
  - **switch** Input do tipo switch, retorna true ou false.

#### Exemplo:

```jsx
<Field name="first_name" type="text" placeholder="Primeiro Nome" label="Primeiro Nome" component={InputField} />
<Field name="check" type="checkbox" label="Teste Checkbox" id="check" component={CheckField} />
<Field inline name="choice" type="radio" label="Teste Radio 01" value="teste01" id="radio1" component={CheckField} />
<Field inline name="choice" type="radio" label="Teste Radio 02" value="teste02" id="radio2" component={CheckField} />
<Field name="switch" type="switch" label="Teste Switch" id="switch" component={CheckField} />
<Field name="description" placeholder="Descrição" rows={5} component={TextAreaField} />
<Field name="range" label="Range" max={50} component={RangeField} />
<Field name="file" label="Arquivo" placeholder="Clique aqui para inserir o arquivo." component={FileField} />
<Field
  multiple
  name="multiselect"
  type="select"
  label="Selecione as melhores opções"
  options={[
    {title: "1", value: 1},
    {title: "2", value: 2},
    {title: "3", value: 3},
    {title: "4", value: 4},
  ]}
  component={SelectField}
/>
<Field
  name="select"
  type="select"
  placeholder="Selecione a melhor opção"
  options={[
    {title: "1", value: 1},
    {title: "2", value: 2},
    {title: "3", value: 3},
    {title: "4", value: 4},
  ]}
  component={SelectField}
/>
```

```html
<!-- Input -->
<label class="form-label">Primeiro Nome</label>
<input name="first_name" placeholder="Primeiro Nome" type="text" id="first_name" class="form-control" value="">
<div class="valid-feedback"></div>
<div class="invalid-feedback">Nome é obrigatório.</div>
<!-- Checkbox -->
<div class="custom-control custom-checkbox">
  <input name="check" type="checkbox" id="check" class="custom-control-input" value="" />
  <label title="" for="check" class="custom-control-label">Teste Checkbox</label>
</div>
<!-- Radio -->
<div class="custom-control custom-radio">
  <input name="choice" type="radio" id="radio1" class="custom-control-input" value="teste01">
  <label title="" for="radio1" class="custom-control-label">Teste Radio 01</label>
</div>
<div class="custom-control custom-radio">
  <input name="choice" type="radio" id="radio2" class="custom-control-input" value="teste02">
  <label title="" for="radio2" class="custom-control-label">Teste Radio 02</label>
</div>
<!-- Switch -->
<div class="custom-control custom-switch">
  <input name="switch" type="checkbox" id="switch" class="custom-control-input" value="">
  <label title="" for="switch" class="custom-control-label">Teste Switch</label>
</div>
<!-- TextArea -->
<textarea name="description" placeholder="Descrição" rows="5" type="text" id="description" class="form-control"></textarea>
<div class="valid-feedback"></div>
<div class="invalid-feedback"></div>
<!-- Range -->
<label class="form-label">Range</label>
<input name="range" min="0" max="80" type="range" id="range" class="custom-range" value="">
<div class="valid-feedback"></div>
<div class="invalid-feedback"></div>
<!-- File -->
<label class="form-label">Arquivo</label>
<div class="custom custom-file">
  <input name="file" id="file" type="file" class="custom-file-input" value="">
  <label for="file" class="custom-file-label">Clique aqui para inserir o arquivo.</label>
</div>
<div class="valid-feedback"></div>
<div class="invalid-feedback"></div>
<!-- Multiselect -->
<label class="form-label">Selecione as melhores opções</label>
<select multiple="" name="multiselect" type="select" id="select" class="custom-select">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
<div class="valid-feedback"></div>
<div class="invalid-feedback"></div>
<!-- Select -->
<select name="select" type="select" id="select" class="custom-select is-valid">
  <option value="">Selecione uma opção</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
<div class="valid-feedback"></div>
<div class="invalid-feedback"></div>
```

## Constantes de classe para estilos

Contante default **style**, com ela você consegue inserir as classes usando uma lista.

```jsx
import { COLORS, toString } from 'vwapp-react-components';

const { backgroundDark, textWhite } = COLORS;

<Container fluid className={toString([backgroundDark, textWhite])}>
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
