import React from 'react'
import Header from './Header'
import Footer from './Footer'
import  ".././Styles/HomeStyle.css";
import { Col, Container, Row } from 'react-bootstrap';
// import { Route } from 'react-router-dom';
function About() {
  return (
   <>
   <Header/>
<section className='AboutUs'>

    <Container>
        <Row>
            <Col>
            <p>Welcome to Food Planet! I'm Surdeep Rathore, the founder and passionate foodie behind this culinary adventure. At Food Planet, we believe that food is more than just sustenance; it's an experience to be savored and shared. Our mission is to bring you an array of delicious dishes that celebrate diverse flavors from around the world.

With a commitment to quality and a love for innovation, we strive to create memorable meals that delight the palate and warm the heart. Whether you're craving comfort food, exploring new tastes, or enjoying classic favorites, our menu is designed to offer something for everyone.

We take pride in our exceptional service, ensuring that each dining experience is as enjoyable as the food itself. Thank you for joining us on this journey—here’s to great food, good times, and endless culinary exploration!</p>
            </Col>
              

            <Col>
            <div className="profile_section">
            <div className="image_section">
            <img src="https://media.licdn.com/dms/image/D5603AQHtBASHs-FDVA/profile-displayphoto-shrink_400_400/0/1721672708455?e=1727913600&v=beta&t=dlDKAsoJXYco8Krt2BVkiCk2qpUwmVxcP_E-g0VZmDc" alt="" />
            </div>
           </div>
            </Col>
         
        </Row>
    </Container>
</section>
   
   <Footer/>
   </>
  )
}

export default About
