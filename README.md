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

import { Pagination } from 'vwapp-react-components'

class Example extends Component {
  render() {
    return (
      <Pagination
        totalItens={60}
        itemPerPage={20}
        activePage={this.state.activePage}
        handlePagination={this.__handlePagination}
      />
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

### 2. FormFields

Componentes relacionados a criação de formulários. Usado em conjunto com libs como [react-final-form](https://github.com/final-form/react-final-form), [redux-form](https://github.com/redux-form/redux-form) e [formik](https://github.com/jaredpalmer/formik).

O mais aconselhado é o **react-final-form**.

#### Componentes

* InputField
* CheckField
* ColorField
* DateListField
* TextAreaField
* SelectField
* RangeField
* ImageField
* FileField
* InputGroupField
* DateTimeField

#### Propriedades especificas (Geral):

* **name**: Nome do atributo que irá ser populado pelo usuário. É esse atributo que irá para a submissão do formulário, ele deve ser único. (String - Obrigatório)

* **id**: Identificado do campo no formulário. (String - Para o CheckField é obrigatório, para os outros ele é o atributo name.)

* **label**: Label que acompanhará o input. (String - Opcional)

* **component**: Componente do input. É aqui que fica os componentes citados acima. (Component - Obrigatório.)

* **disabled**: Desativa o component. (Booleano - Opcional)

* **className**: Conjunto de classes dos campos. (String - Opcional)

* **column**: Faz a label ficar em cima do campo. (Booleano - defaul false)

#### Propriedades especificas (InputField)

* **placeholder**: Leve descrição do campo. (String - Opcional)

* **size**: Tamanho do input: "sm", "md", "lg". (String - padrão "mg")

* **readOnly**: Fazer o campo ser um texto só de leitura. (Booleano - default false)

#### Propriedades especificas (DataListField)

* **placeholder**: Leve descrição do campo. (String - Opcional)

* **size**: Tamanho do input: "sm", "md", "lg". (String - padrão "mg")

#### Propriedades especificas (InputGroupField)

* **placeholder**: Leve descrição do campo. (String - Opcional)

* **left**: Insere componentes do lado esquerdo do input. Por exemplo: ```InputGroup.Text```. (Component - Opcional)

* **right**: Insere componentes do lado direiro do input. Por exemplo: ```Button```. (Component - Opcional)

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

#### Propriedades especificas (FileField)

* **type**: Tipo do input. (String - Obrigatória - valor "file")

* **placeholder**: Leve descrição do campo. (String - Opcional)

#### Propriedades especificas (ImageField)

* **type**: Tipo do input. (String - Obrigatória - valor "file")

* **placeholder**: Leve descrição do campo. (String - Opcional)

#### Propriedades especificas (DateTimeField)

* **maxDate**: Data limite de inserção. Só funciona nos tipos **date** e **datetime**. (Date, Opcional)

* **minDate**: Data mínima de inserção. Só funciona nos tipos **date** e **datetime**. (Date, Opcional)

* **type**: Tipo do input. (String - Padrão "datetime")

  - **date**: Inserir somente a data.
  - **time**: Inserir somente a hora.
  - **datetime**: Inserir hora e data.

#### Exemplo:

```jsx
<Form noValidate onSubmit={handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} md="6" controlId="formFirstName">
      <Field
        column
        name="first_name"
        placeholder="Primeiro Nome"
        label="Primeiro Nome"
        component={InputField}
      />
    </Form.Group>

    <Form.Group as={Col} md="6" controlId="formLastName">
      <Field
        column
        name="last_name"
        placeholder="Último Nome"
        label="Último Nome"
        left={<InputGroup.Text>$</InputGroup.Text>}
        right={
          <DropdownButton
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-1">
            <Dropdown.Item onClick={() => console.log("Action 1")}>Action 1</Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("Action 2")}>Action 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => console.log("Action 3")}>Action 3</Dropdown.Item>
          </DropdownButton>
        }
        component={InputGroupField}
      />
    </Form.Group>
  </Form.Row>

  <Fieldset title="Formulário de escolhas">
    <Form.Row className="d-flex flex-row">
      <Form.Group as={Col} md="4" controlId="formCheckbox" className="d-flex flex-column justify-content-between">
        <Field
          name="check"
          type="checkbox"
          label="Teste Checkbox"
          id="check"
          component={CheckField}
        />
        <Field
          name="switch"
          type="switch"
          label="Teste Switch"
          id="switch"
          component={CheckField}
        />
        <Field
          column
          name="color"
          label="Teste Color"
          component={ColorField}
        />
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="formRadioButton" className="d-flex flex-column justify-content-between">
        <Field
          name="choice"
          type="radio"
          label="Teste Radio 01"
          value="teste01"
          id="radio1"
          component={CheckField}
        />
        <Field
          name="choice"
          type="radio"
          label="Teste Radio 02"
          value="teste02"
          id="radio2"
          component={CheckField}
        />
        <Field
          column
          name="browsers"
          label="Data List"
          placeholder="Insira um navegador."
          options={[
            {title: "Internet Explore", value: "Internet Explore"},
            {title: "Firefox", value: "Firefox"},
            {title: "Chrome", value: "Chrome"},
            {title: "Safari", value: "Safari"},
          ]}
          component={DataListField}
        />
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="formSelect">
        <Field
          column
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
        <Line />
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
      </Form.Group>
    </Form.Row>
  </Fieldset>

  <Fieldset title="Formulário de datas">
    <Form.Row className="d-flex flew-row justify-content-center">
      <Form.Group as={Col} md="4" controlId="formDateTime" className="d-flex flew-row justify-content-center">
        <Field
          name="datetime"
          label="Date e Hora:"
          type="datetime"
          minDate={new Date()}
          component={DateTimePicker}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="formDate" className="d-flex flew-row justify-content-center">
        <Field
          name="date"
          label="Data:"
          type="date"
          minDate={new Date()}
          component={DateTimePicker}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="formTime" className="d-flex flew-row justify-content-center">
        <Field
          name="time"
          label="Hora:"
          type="time"
          component={DateTimePicker}
        />
      </Form.Group>
    </Form.Row>
  </Fieldset>

  <Form.Row>
    <Form.Group as={Col} md="12" controlId="formDescription">
      <Field
        name="description"
        placeholder="Descrição"
        rows={5}
        component={TextAreaField}
      />
    </Form.Group>
  </Form.Row>

  <Form.Row className="d-flex flex-row">
    <Form.Group as={Col} md="8" controlId="formRange" className="d-flex flex-column justify-content-between">
      <Field
        column
        name="range"
        label="Range"
        max={80}
        component={RangeField}
      />
      <Field
        name="file"
        label="Arquivo:"
        type='file'
        placeholder="Clique para inserir o arquivo."
        component={FileField}
      />
      <Json values={values} />
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="formFile">
      <Field
        name="image"
        type='file'
        label="Imagem"
        placeholder="Clique aqui para inserir a imagem."
        component={ImageField}
      />
    </Form.Group>
  </Form.Row>

  <Button variant="dark" type="submit" disabled={submitting || pristine}>Enviar</Button>
</Form>
```

## Constantes de classe para estilos

#### 1. Flexbox

```jsx
export const Flexbox = {
  container: {
    total: 'd-flex',
    partial: 'd-inline-flex'
  },
  direction: {
    row: {
      this: 'flex-row',
      reverse: 'flex-row-reverse',
      align: {
        vertical: {
          block: {
            up: 'align-content-start',
            down: 'align-content-end',
            center: 'align-content-center',
            spaceAround: 'align-content-around',
            fill: 'align-content-stretch'
          },
          line: {
            up: 'align-items-start',
            down: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            fill: 'align-items-stretch'
          }
        },
        horizontal: {
          line: {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            spaceBetween: 'justify-content-between',
            spaceAround: 'justify-content-around'
          },
          drag: {
            left: 'ml-auto',
            right: 'mr-auto'
          }
        },
        wrap: {
          this: 'flex-wrap',
          none: 'flex-nowrap',
          reverse: 'flex-wrap-reverse'
        }
      }
    },
    column: {
      this: 'flex-column',
      reverse: 'flex-column-reverse',
      align: {
        horizontal: {
          block: {
            up: 'align-content-start',
            down: 'align-content-end',
            center: 'align-content-center',
            spaceAround: 'align-content-around',
            fill: 'align-content-stretch'
          },
          line: {
            up: 'align-items-start',
            down: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            fill: 'align-items-stretch'
          },
          drag: {
            left: 'ml-auto',
            right: 'mr-auto'
          }
        },
        vertical: {
          line: {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            spaceBetween: 'justify-content-between',
            spaceAround: 'justify-content-around'
          }
        },
        wrap: {
          this: 'flex-wrap',
          none: 'flex-nowrap',
          reverse: 'flex-wrap-reverse'
        }
      }
    }
  },
  item: {
    fill: 'flex-fill',
    grow: 'flex-grow-1',
    shrink: 'flex-shrink-1',
    align: {
      start: 'align-self-start',
      end: 'align-self-end',
      center: 'align-self-center',
      baseline: 'align-self-baseline',
      fill: 'align-self-stretch'
    },
    order: {
      first: 'order-1',
      second: 'order-2',
      third: 'order-3',
      fourth: 'order-4',
      fifth: 'order-5',
      sixth: 'order-6',
      seventh: 'order-7',
      eighth: 'order-8',
      ninth: 'order-9',
      tenth: 'order-10',
      eleventh: 'order-11',
      twelfth: 'order-12'
    }
  }
}
````



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
