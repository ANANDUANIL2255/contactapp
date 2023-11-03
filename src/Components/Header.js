import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-danger">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>

          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/5yDkzpXw/images-removebg-preview.png"
              width="50"
              height="50"
              className="d-inline-block  mt-2"
            />{' '}
            CONTACT
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header