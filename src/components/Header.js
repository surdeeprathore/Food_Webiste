import React,{useState} from 'react'
import "../Styles/HeaderStyle.css"
import {Container ,Nav ,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
const [nav,setNav]= useState();
 
const changeValueOnScoll =()=>{
  const scrollValue = document?.documentElement?.scrollTop;
scrollValue>100 ?setNav(true) :setNav(false);
};
window.addEventListener("scroll",changeValueOnScoll);

  return (
    <>
      
      <section className="LinkTo1">
      <Navbar expand="lg"  className={`${nav === true ? "sticky": ""}`}>
      <Container>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEU5RGS8j8BHPzwJbz3N3PEkcWLAt3effNg&s" className='logo' alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="meAuto">
             <span className= "Header_section">  <Link to ="/">Home</Link></span>
             <span className= "Header_section">  <Link to ="/about">About</Link></span>
             <span className= "Header_section">  <Link to ="/ourMenu">Our Menu</Link></span>
             <span className= "Header_section">  <Link to ="/shop">Shop</Link></span>
             <span className= "Header_section">   <Link to ="/blog">Blog</Link></span>
             <span className= "Header_section">   <Link to ="/contact">Contact</Link></span>
             <span className= "Header_section">   <Link to ="/shop" className='cart'><i class="bi bi-bag"></i>
            <em className='roundPoint'>2</em>
            </Link></span>
      
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
    </>
  )
}

export default Header;
