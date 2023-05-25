import './App.css';
import { useState } from "react"; 
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Detail from "./pages/Detail.js";


//import Button from 'react-bootstrap/Button'
//import { Button } from 'react-bootstrap'


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={ () => { navigate('/') }} >SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={ () => { navigate('/') }} >HOME</Nav.Link>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={ () => { navigate('/about') }} >ABOUT</NavDropdown.Item>
                <NavDropdown.Item onClick={ () => { navigate('/about/member') }} >MEMBER</NavDropdown.Item>
                <NavDropdown.Item onClick={ () => { navigate('/about/location') }} >LOCATION</NavDropdown.Item>
              </NavDropdown>
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

      <Routes>
        <Route path="/" element={ <Main></Main> } /> {/* 페이지 /메인 */}
        <Route path="/detail/:id" element={ <Detail></Detail> } /> {/* 페이지 */}
        <Route path="/about" element={ <About></About> } >
          <Route path="member" element={ <div>멤버</div> } /> {/* 라우트 그룹 */}
          <Route path="location" element={ <div>위치</div> } /> {/* 라우트 그룹 */}
        </Route>
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>

    </div>
  );
}


export default App;
