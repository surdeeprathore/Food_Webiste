import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section6() {
  return (
   <>
   <section className="contact_section">
    <Container>
     <Row >
        <Col >
        <h4>We Guarantee</h4>
        <h2>30 Minutes Delivery</h2>
        <p> "We know your time is valuable, so we make sure you get hot, fresh food without the wait. If we’re not on time, we’ll make it right. Enjoy fast, reliable service every time you order. Your satisfaction is our top priority!"</p>
        <Link to="/" className="Link">Call:999-888-7777</Link>
        </Col>
     </Row>
    </Container>
   </section>
   </>
  )
}

export default Section6
