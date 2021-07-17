import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Loading = () => {
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: '50vh', textAlign: 'center' }}>
          <div className="wrapper">
            <i
              className="now-ui-icons loader_refresh spin"
              style={{ font: "normal normal normal 85px/1 'Nucleo Outline'" }}
            ></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
