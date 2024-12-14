import React from 'react'
// import { Form } from 'react-bootstrap'

import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  ".././Styles/HomeStyle.css";
import Layout from './Layout'
// import { Button, Form } from 'react-bootstrap'

function Shop() {
  return (
   <>
   <Layout>
<section className='form'>
    <Container>
        <Row>
        <form action="Form_section">
            <h2>Login</h2>
            <p>Doesn't have an account yet?</p>
                <Link to="#loginform" className="signup">Sign Up</Link>
        <p>Email Address:</p>
        <input type="email" placeholder="enter your email"/>
       <p>Password:</p>
       <input type="Password" placeholder="Enter your password" />
       <div className="me">
       <input type="checkbox" />
       <span>Remember Me</span>
       </div>

       <button className='Login'>Login </button>
        </form>



        </Row>

    </Container>
</section>
  
    </Layout>
   </>
  )
}

export default Shop
