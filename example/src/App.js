import React from 'react'
import { Pagination } from 'vwapp-react-components';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
        <Row>
          <Col>
            <Pagination
              totalItens={120}
              itemPerPage={20}
              activePage={this.state.activePage}
              handlePagination={this.__handlePagination}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
