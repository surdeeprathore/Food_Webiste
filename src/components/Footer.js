import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {

const [isVisible,setIsVisible] =useState(false);
const scrollTop = ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
}; 

const listenToScroll =() =>{
  let heightToHidden = 250;
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

windowScroll>heightToHidden ? setIsVisible(true):setIsVisible(false);
};
useEffect(() =>{
  window.addEventListener("scroll",listenToScroll);
});



return(
  <>
  <section className="footer">
    <Container>
      <Row>
        <Col>
        <h5>LOCATION</h5>
        <p>5505,Waterford District Dr.VAINANI,FL 33126
          United States
        </p>
        </Col>
        <Col>
        <h5>WORKING HOURS</h5>
      
        <li>Mon-Fri:9:00AM-10:00PM</li>
        <li>Saturday:10AM-8:30PM</li>
        <li>sanday:12:00PM-5:00PM</li>
      
        </Col> <Col>
        <h5>ORDER NOW</h5>
        <p> "Click, savor, and enjoy—your next meal is just a moment away!"
        </p>
        <h2 className='Calling'>999-888-7777</h2>
        </Col> <Col>
        <h5>FOLLOW US</h5>
        <p> "Stay connected and never miss a delicious moment".
        </p>
        <Link> <i className="bi bi-facebook"></i></Link>
        <Link> <i className="bi bi-twitter"></i></Link>
        <Link> <i className="bi bi-instagram"></i></Link>
        <Link> <i className="bi bi-youtube"></i></Link>
        </Col>
      </Row>
      <br />
      <hr />
      <Row className='footer_section'>
        
          <span>@2024.<span className="Food_planet">Surdeep_rathore.</span>  All the Rights reserved About Us  |  Terms of Use  |  Privacy Policy</span>
      </Row>


    </Container>
  </section>

  
{isVisible && ( <div className="scroll_top" onClick={scrollTop}>
    <i className='bi bi-arrow-up'></i>
  </div>)
  
  }



 
  </>
)
}

export default Footer
