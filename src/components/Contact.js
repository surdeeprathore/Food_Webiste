import React from 'react'

import { Container,Row,Col } from 'react-bootstrap'
import Layout from './Layout'


function Contact() {
  return (
   <>
   <Layout>
   <section className="contact">
 <Container>
<Row>
<h3>We'd Love to Hear From You!</h3>
<p>Whether you have a question, feedback, or simply want to make a reservation, our team is here to help. Please use any of the following methods to reach out to us.</p>

</Row>

<Row>
<Col>
<h3>Visit Us</h3>
<p>Happy green planet family resturant
100-shastri nagar 
Gourmet City, FL 282001</p>
</Col>
<Col>
<h3>Call Us</h3>
<p>Phone: (+91) 7830277702
Hours: Mon-Sun, 10:00 AM - 10:00 PM</p>
</Col>
<Col>
<h3>Email Us</h3>
<p>General Inquiries: info@foodplanet.com
Reservations: reservations@foodplanet.com
Feedback: feedback@foodplanet.com</p>

</Col>

<Col> 
<h3>Follow Us</h3>
<p>Stay connected and get the latest updates, special offers, and events by following us on social media:</p>
</Col>
</Row>
 </Container>
    
 
   </section>

  
   </Layout>
   </>
  )
}

export default Contact
