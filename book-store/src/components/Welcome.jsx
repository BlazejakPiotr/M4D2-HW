import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Container fluid>
    <Row>
      <Col className="text-center">
        <Jumbotron>
          <h1>Hello Strivers!</h1>
          <p>This is a bookstore for students.</p>

          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Welcome;
