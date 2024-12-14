import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  ".././Styles/HomeStyle.css";

function Section1() {
  return (
    <section className='hero_section'>
     <Container>
     <Row>
     <Col lg={7} className='mb-5 mb-lg-0' > 
     <div className="position-relative">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEORM58QoOyxnGKc1xcARaP264UJLkE649hQ&s" className='img-fluid' alt="Hero" />
      <div className="badge_text">
      <h4 className="h4_xs">Only</h4>
      <h4 className="h3_lg">$6.99</h4>
     </div> 
     </div>
     </Col>
     <Col lg={5}>
     <div classNmae="">
      <h1 >New Burder</h1>
      <h2 className="">With Onion</h2>
      <p>"Welcome to a culinary adventure like no other! Today, we open our doors to a world of exquisite flavors and unforgettable dining experiences".
</p>
      <Link to=""  className="order_now">Order now</Link> 
     </div>
     </Col>
     </Row>
     </Container>
    </section>
  )
}

export default Section1
