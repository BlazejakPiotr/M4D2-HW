import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Book Store</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
