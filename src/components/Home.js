import React from 'react'
import Layout from './Layout'
import  ".././Styles/HomeStyle.css";


import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

// import Section1 from './Section1'



function Home() {
  return (
    <>
     <Layout>


     <Section1/>
  <Section2/>
   <Section3/>
   <Section4/>  
   <Section5/>
    <Section6/>

      </Layout> 
    </>
  )
}

export default Home
