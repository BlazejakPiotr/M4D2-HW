import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Bookstrive</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <NavDropdown title="Browse" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#">Other stuff</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">And other</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
