import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  ".././Styles/HomeStyle.css";
function Section2() {
  return (
    <>
    <section className="about_section">
        <Container>
            <Row>
                <Col lg={{span:8,offset:2}} className="text-centre">
                <h2> The burger tastes better when you it with your family </h2>
                <p>Join us as we embark on this delicious journey, where every dish tells a story and every bite brings you closer to culinary perfection. Celebrate with us as we create memories one plate at a time!"</p>
                <div className="Full_Menu">
                <Link href="#card" className="Full">Explore Full Menu
                </Link></div>
              
                </Col>
                </Row>
        </Container>

    </section>

    <div className="background">
    </div>
   
<section className="about_wrapper">
 <Container>
  <Row className="justify-content-md-centre">
<Col md ={6} lg={4} className ="mb-4 mb-md-0">
<div className="about_box text-centre">
    <div className="about_icon">
        <img src="https://st2.depositphotos.com/1672707/8847/v/450/depositphotos_88471956-stock-illustration-pizza-delivery-logo.jpg" alt="" />
    </div>
       <h4>Original</h4>
       <p>"Welcome to a haven of originality in every bite. Our restaurant is dedicated to serving only the most authentic and original dishes, crafted with passion and the finest ingredients. Here, tradition meets innovation, and every meal tells a story of genuine flavor. Join us and taste the difference of original food, perfected."
       </p>

</div>
</Col >
<Col md ={6} lg={4} className ="mb-4 mb-md-0">
<div className="about_box text-centre">
    <div className="about_icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDrsL4leRBJHp78EdXF-OZGFuXqBH57N4VA&s" alt="" />
    </div>
       <h4>Fastest Delivary</h4>
       <p>"Welcome to a haven of originality in every bite. Our restaurant is dedicated to serving only the most authentic and original dishes, crafted with passion and the finest ingredients. Here, tradition meets innovation, and every meal tells a story of genuine flavor. Join us and taste the difference of original food, perfected."
       </p>
</div>
</Col >
<Col md ={6} lg={4}   className ="mb-4 mb-md-0">
<div className="about_box text-centre">
    <div className="about_icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT368-cw7sbL9iQMSEcQ5v5WPb_kcsZr3NN5JnjqT0sFO629RyLjSRi_tb-ejx4ORD2Wkw&usqp=CAU" alt="" />
    </div>
       <h4>Food Quality</h4>
       <p>"Welcome to a haven of originality in every bite. Our restaurant is dedicated to serving only the most authentic and original dishes, crafted with passion and the finest ingredients. Here, tradition meets innovation, and every meal tells a story of genuine flavor. Join us and taste the difference of original food, perfected."
       </p>
</div>
</Col >
  </Row>
 </Container>
</section>



    </>    
  )
}
export default Section2
