import React from 'react'
import style, {
  Container, Row, Col, Title, Image, Json,
  COLORS, Table, TableCol, TableLine, BlockQuote,
  Alert
} from 'vwapp-react-bootstrap-4';

const App = () => {
  const { backgroundDark, backgroundLight, textWhite } = COLORS;

  return (
    <Container fluid className={style([backgroundLight, textWhite])}>
      <Row className={style([backgroundDark])}>
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
        <Alert type="success" dismissible>
          <b>Parabéns</b> Você venceu!
        </Alert>
      </Row>
      <Row className={style(["pt-3"])}>
        <Col screens={["xs"]} sizes={["12"]}>
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
    </Container>
  )
}

export default App
