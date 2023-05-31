import './App.css';
import { lazy, Suspense, useState } from "react"; 
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import { useQuery } from "react-query"

import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Detail from "./pages/Detail.js";
//import Cart from "./pages/Cart.js";
// lazy 해당 스크립트를 별도로 분리하여 페이지 호출시 로드함
const Cart = lazy( ()=>import('./pages/Cart.js'));


//import Button from 'react-bootstrap/Button'
//import { Button } from 'react-bootstrap'


function App() {

  let navigate = useNavigate();

  //axios.get('https://hong-havi.github.io/study-data/data/user.json').then((response)=>{
  //})

  // state 공유 안해도 됨 같은 경로의 요청이 있어도 알아서 한번만 요청해줌
  // ajax 캐싱도 저장함
  let result = useQuery('query', ()=>{
    return axios.get('https://hong-havi.github.io/study-data/data/user.json').then((response)=>{
      console.log(response)
      return response.data
    }),
    { staleTime: 2000 } // Refetch 시간 조절 
  })

  /**
   * result.data //
   * result.isLoading // 로딩중
   * result.error 
   */

 // console.log(result)

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
              <Nav.Link onClick={ () => {navigate('/cart') }}>CART</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link >
                { result.isLoading ? '로딩중' : result.data.name }
                {/* result.isLoading && '로딩중' */}
                {/* result.error && '에러남' */}
                {/* result.data && result.data.name */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <Main></Main> } /> {/* 페이지 /메인 */}
        <Route path="/detail/:id" element={ <Suspense fallback={<div>로딩중</div>}><Detail></Detail></Suspense> } /> {/* 페이지 suspense 페이지 로딩중 ui 추가*/}
        <Route path="/about" element={ <About></About> } >
          <Route path="member" element={ <div>멤버</div> } /> {/* 라우트 그룹 */}
          <Route path="location" element={ <div>위치</div> } /> {/* 라우트 그룹 */}
        </Route>
        <Route path="/cart" element={ <Cart/> } /> 
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>

    </div>
  );
}


export default App;
