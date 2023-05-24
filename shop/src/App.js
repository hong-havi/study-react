import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

/** 이미지 가져올시 
 * import 
 * public 폴더에 넣고 사용
 *   - process.env.PUBLIC_URL + '/image.jpg' 형태로 사용
 * 외부 URL
 **/

import BgImage from './img/bg.png' // 코드상에선 이미지도 import


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
            <img src="/image/shoes1.jpg" width="80%" alt="상품1"/>
            <h4>상품명1</h4>
            <p>상풍설명</p>
          </div>
          <div className='col-md-4'>
            <img src="https://hong-havi.github.io/study-data/img/shoes2.jpg" width="80%" alt="상품2"/>
            <h4>상품명2</h4>
            <p>상풍설명</p>
          </div>
          <div className='col-md-4'>
            <img src="https://hong-havi.github.io/study-data/img/shoes3.jpg" width="80%" alt="상품3"/>
            <h4>상품명3</h4>
            <p>상풍설명</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
