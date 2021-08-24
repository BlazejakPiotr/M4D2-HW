import { Card, Container, Row, Col } from "react-bootstrap";
import horrors from "../data/horror.json";

const LastestRelease = () => (
  <Container fluid>
    <Row className="align-items-center">
      {horrors.map((book) => (
        <Col md={2} className="mt-3">
          <Card>
            <Card.Img variant="top" src={book.img} />
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default LastestRelease;
