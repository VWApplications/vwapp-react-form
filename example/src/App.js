import React from 'react'
import style, {
  Container, Row, Col, Title, Box, Json,
  COLORS, Table, TableCol, TableLine
} from 'vwapp-react-bootstrap-4';

const App = () => {
  const { backgroundDark, backgroundLight, textWhite } = COLORS;

  return (
    <Container fluid className={style([backgroundDark, textWhite])}>
      <Row>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "2"]}>
          <Title size="md" subtitle="react">Ola mundo!</Title>
        </Col>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "8"]}>
          <Json className={textWhite} values={{name: "Victor Deon", job: "Software Engineer"}} />
        </Col>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "2"]}>
          <Box>Ctrl + P</Box>
        </Col>
      </Row>
      <Row className={style([backgroundLight, "pt-3"])}>
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
