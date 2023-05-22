import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

import BgImage from './img/bg.png' // 코드상에선 이미지도 import
import shoes1 from './img/shoes1.jpg' 


//import Button from 'react-bootstrap/Button'
//import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#HOME">HOME</Nav.Link>
              <Nav.Link href="#CART">CART</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: 'url(' + BgImage + ')'}}></div>

      <div className='container'>
        <div className="row">
          <div className='col-md-4'>
            <img src="{{ shoes1 }}" />
            <h4>상품명</h4>
            <p>상풍설명</p>
          </div>
          <div className='col-md-4'>안녕2</div>
          <div className='col-md-4'>안녕3</div>
        </div>
      </div>

    </div>
  );
}

export default App;
