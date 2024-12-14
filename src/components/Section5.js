import React from 'react'
import { Container,Row,Col, Carousel } from 'react-bootstrap'
function Section5() {
  return (
   <>
<section className="shop_section">
    <Container>
        <Row>
            <Col><h4>DOWNLOAD MOBILE APP AND </h4>
            <h2>SAVE UP TO 20%</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro quasi atque rerum eum ipsa explicabo sunt possimus assumenda perferendis.</p>
            <Row>
                <Col><img src="https://shorturl.at/1EnWS" alt="" /></Col>
                <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2ew_EbS7rG--lRgBMmutMEmsP3md_F-zVjmZNhmBKUJH8VXr1v7G4pAC_MC1Kj51oA&usqp=CAU" alt="" /></Col>
            </Row>
             </Col>
             <Col className="menu_logo">
             <img src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-chef-logo-for-culinary-png-image_11378618.png" alt="" />
             </Col>
        </Row>
    </Container>
</section>

<section className="brand_section">
<Container>
  <Row>
  <Carousel>
      <Carousel.Item>
       <div className="center">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s"
          alt="First slide"
        />
        </div>
         <p>"A delightful escape with every bite! The good vibes are as unbeatable as the food."</p>
         <div className="stars">
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
       <h5> ABLOBE LOEKJKN</h5>
      </Carousel.Item>
      <Carousel.Item>
      <div className="center">
      <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
          alt="First slide"
        />
        </div>
         <p>"What Our Diners Are Raving About: 'An incredible dining experience where the food and The positive vibes are contagious!"</p>

         
         <div className="stars">
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <h5>Alex T</h5>
      </Carousel.Item>
      <Carousel.Item>
      <div className="center">
      <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iB1zY-OM0aoh3RIhLR_j94LlzNEBtXynTA&s"
          alt="First slide"
        />
        </div>
         <p>""Here's What People Are Loving: 'From the moment we walked in, the good vibes were palpable. Every dish was a taste sensation"</p>

         
         <div className="stars">
          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <h5>Taylor S.</h5>
      </Carousel.Item><Carousel.Item>
      <div className="center">
       <img
           className="image"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCicxernIb5W2jIRbjKwiMOVIit_7XJtczA&s"
           alt="First slide"
         />
         </div>
          <p>"Customer Buzz: 'An oasis of flavor and fun! The food is fantastic, but the great vibes make the experience unforgettable"</p>
 
          
          <div className="stars">
           <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half-fill"></i>
           </div>
           <h5>Morgan L</h5>
       </Carousel.Item>
    </Carousel>
  </Row>
</Container>
</section>
   </>
  )
}

export default Section5
