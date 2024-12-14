import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import  ".././Styles/HomeStyle.css";
import Layout from './Layout';
function Blog() {
  return (
    <>
<Layout>
<section className="blog_section">

  <Container>
    <Row>
      <h3>Welcome to Our Culinary Journey</h3>
      <h6>Dive into the world of culinary delights with our blog! Here, you'll find a mix of delicious recipes, behind-the-scenes stories, chef interviews, and the latest updates from our restaurant. Whether you're a food enthusiast or just curious about what goes on in our kitchen, there's something here for everyone.</h6>
    </Row>
    

    <Row>
      <Col>
      <div className="blog">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-71euDSckO-_Xpc1xIll9GYzBiBqPlfjQStfUKXb130UisFb7_1Uiyw3je91hgfQwTuE&usqp=CAU" alt="" />
      <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i>
      <h5>Meet Our Chefs</h5>
      <p>Get to know the creative minds in our kitchen, their culinary philosophies, and the inspirations behind our signature dishes.</p>
      </div>
      </Col>
      <Col>
      <div className="blog">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJq22BT0aRPPfZBgmq_aapRImhFxG1dJD3qg&s" alt="" />
      <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i>
      <h5>Behind the Bar</h5>
      <p>Discover the stories behind our expertly crafted cocktails, the art of mixology, and the secret ingredients that make our drinks stand out.</p>
      </div>
      </Col>
      <Col >
      <div className="blog">
      <img src="https://www.cvent.com/sites/default/files/image/2023-06/man%20greets%20attendees%20at%20a%20restaurant%20event.jpg" alt="" />
      <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i> <i className='bi bi-star-fill'></i>
      <h5>Events and Happenings</h5>
      
      <p>From wine tastings and live music nights to special holiday feasts and chef’s table dinners, there’s always something exciting happening at Food Planet.</p>
      </div>
      </Col>
    </Row>
   
  </Container>
</section>

 
    </Layout>
    </>
  )
}

export default Blog
