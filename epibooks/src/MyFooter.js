import Container from 'react-bootstrap/Container';
import Footer from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
      <Footer bg="primary" data-bs-theme="dark">
        <Container>
        <p className='footer m-0'>Epicbooks Copyright © 2025 - All Rights Reserved</p>
        </Container>
      </Footer>
  );
}

export default ColorSchemesExample;