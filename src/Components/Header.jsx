import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
           <Navbar.Brand>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LHmT1-tkE0FIUkuR4gFumCV4jr-QEK55ag&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: '12px' }}
            />{' '}
            Media Player
          </Navbar.Brand>
          </Link>
         
        </Container>
      </Navbar>  
    </>
  )
}

export default Header
