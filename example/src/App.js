import React from 'react'
import {
  Container, Row, Col, Title, Image, Json,
  COLORS, Table, TableCol, TableLine, BlockQuote,
  Alert, Button, ButtonGroup, Badge, ProgressBar,
  ProgressBarSlice, toString, Spinner, Pagination,
  BreadCrumb, BreadCrumbItem, List, ListItem,
  CardGroup, Card, CardHeader, CardBody, CardFooter,
  Dropdown, DropLink, DropDivider, DropHeader, DropText
} from 'vwapp-react-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1, listItemActived: {} };
  }

  __redirectTo = (url, state) => {
    console.log(`Redirecionamento para ${url}`);
    console.log(state);
  }

  __handlePagination = page => {
    console.log(`Pagina: ${page}`);
    this.setState({ activePage: page });
  }

  render() {
    const { backgroundDark, backgroundLight, textWhite } = COLORS;

    return (
      <Container fluid className={toString([backgroundLight, textWhite])}>
        <Row className={toString([backgroundDark])}>
          <Col screens={["xs", "sm", "lg"]} sizes={["12", "4", "2"]}>
            <Title size="md" subtitle="react">Ola mundo!</Title>
          </Col>
          <Col screens={["xs", "sm", "lg"]} sizes={["12", "4", "3"]}>
            <Json className={textWhite} values={{name: "Victor Deon", job: "Software Engineer"}} />
          </Col>
          <Col screens={["xs", "sm", "lg"]} sizes={["12", "4", "7"]}>
          <BlockQuote>Teste de blockquote</BlockQuote>
            <Image
              circle center width="100" className="pb-3"
              src="https://user-images.githubusercontent.com/14116020/79032358-28451a80-7b7c-11ea-9762-96738acbeee9.png"
              alt="Cidade"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar>
              <ProgressBarSlice type="success" progress="30">Iniciante</ProgressBarSlice>
              <ProgressBarSlice type="warning" progress="40">Médio</ProgressBarSlice>
              <ProgressBarSlice type="danger" progress="15">Profissional</ProgressBarSlice>
            </ProgressBar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert type="success" dismissible>
              <b>Parabéns</b> Você venceu! <Badge type="dark" rounded>4</Badge> vezes seguidas.
            </Alert>
          </Col>
          <Col>
          <ButtonGroup>
            <Button type="dark" onClick={() => console.log("Smartphone")}>
              <Spinner type="success" /> Carregando...
            </Button>
            <Button type="dark" onClick={() => console.log("Tablet")}>
              Tablet
            </Button>
          </ButtonGroup>
          </Col>
        </Row>
        <Row className={toString(["pt-3"])}>
          <Col>
            <Table hover bordered headerDark attrTBody={{id: "my-tbody"}} headers={["Nome", "Telefone"]}>
              <TableLine>
                <TableCol id="jp" bold>João</TableCol>
                <TableCol>(61) 99928-4948</TableCol>
              </TableLine>
              <TableLine>
                <TableCol bold>Maria</TableCol>
                <TableCol>(61) 93840-2233</TableCol>
              </TableLine>
            </Table>
          </Col>
        </Row>
        <Row className={toString(["pt-3"])}>
          <Col>
            <Pagination
              totalItens={120}
              itemPerPage={20}
              activePage={this.state.activePage}
              handlePagination={this.__handlePagination}
            />
          </Col>
          <Col>
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
          </Col>
        </Row>
        <Row className={toString(["pt-3"])}>
          <Col>
            <List link>
              <ListItem handleClick={() => console.log('Link 01')}>Link 01</ListItem>
              <ListItem handleClick={() => console.log('Link 02')}>Link 02</ListItem>
            </List>
          </Col>
          <Col>
            <List clean>
              <ListItem actived>Item 01</ListItem>
              <ListItem>Item 02</ListItem>
            </List>
          </Col>
        </Row>
        <Row className={toString(["pt-3"])}>
          <Col>
            <CardGroup spaces>
              <Card>
                <CardHeader className="bg-dark text-white">Header</CardHeader>
                <CardBody>Content</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
              <Card>
                <CardHeader className="bg-dark text-white">Header</CardHeader>
                <CardBody>Content</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <Dropdown title="Ordernar" type="primary">
              <DropHeader>Ordenação</DropHeader>
              <DropLink onClick={() => console.log('Ordenando por nome!')}>Por nome</DropLink>
              <DropLink onClick={() => console.log('Ordenando por data!')}>Por data de criação</DropLink>
              <DropDivider />
              <DropText>Desenvolvimento</DropText>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
