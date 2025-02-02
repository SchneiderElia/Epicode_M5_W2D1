import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
          <Nav className="justyfy-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboust">Aboust</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;