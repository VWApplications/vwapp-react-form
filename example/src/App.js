import React from 'react'
import { Pagination } from 'vwapp-react-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  __handlePagination = page => {
    console.log(`Pagina: ${page}`);
    this.setState({ activePage: page });
  }

  render() {
    return (
      <Pagination
        totalItens={120}
        itemPerPage={20}
        activePage={this.state.activePage}
        handlePagination={this.__handlePagination}
      />
    )
  }
}

export default App;
