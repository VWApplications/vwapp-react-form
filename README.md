# vwapp-react-bootstrap-4

> Componentes bootstrap4 usando react.

[![NPM](https://img.shields.io/npm/v/vwapp-react-bootstrap-4.svg)](https://www.npmjs.com/package/vwapp-react-bootstrap-4) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação.

```bash
npm install --save vwapp-react-bootstrap-4
```

## Uso

```jsx
import React, { Component } from 'react'

import MyComponent from 'vwapp-react-bootstrap-4'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

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

## Licença

MIT © [VictorDeon](https://github.com/VictorDeon)
