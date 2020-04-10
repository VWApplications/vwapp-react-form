import React from 'react'
import style, {
  Container, Row, Col, Title, Box, Json,
  COLORS
} from 'vwapp-react-bootstrap-4';

const App = () => {
  const { backgroundDark, textWhite } = COLORS;

  return (
    <Container fluid className={style([backgroundDark, textWhite])}>
      <Row>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "2"]}>
          <Title size="md" subtitle="react">Ola mundo!</Title>
        </Col>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "8"]}>
          <Box>Ctrl + P</Box>
        </Col>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "2"]}>
          <Title size="xs">Pequeno texto</Title>
        </Col>
      </Row>
      <Row>
        <Col screens={["xs"]} sizes={["12"]}>
          <Json className={textWhite} values={{name: "Victor Deon", job: "Software Engineer"}} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
