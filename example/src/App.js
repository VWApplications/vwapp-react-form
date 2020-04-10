import React from 'react'

import { Container, Row, Col } from 'vwapp-react-bootstrap-4';

const App = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "2"]}>Coluna 01.</Col>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "8"]}>Coluna 02.</Col>
        <Col screens={["xs", "sm", "lg"]} sizes={["3", "4", "2"]}>Coluna 03.</Col>
      </Row>
    </Container>
  )
}

export default App
