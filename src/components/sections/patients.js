import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from './../../utils/sr';
import Treatments from './Accordion/Treatment'
import AOS from 'aos';
import "aos/dist/aos.css";





const StyledAboutSection = styled.section`

  max-width: 900px;

 
  .header-2{
 

font-size: 54px;

&:after {
content:''; 
position: absolute;
display:block; 
width:180px; 
height:4px; 
background: blue; 
margin-left: 200px; 


margin-top:-10px; border-radius:3px;}
}
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    margin-left: 10px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`

margin-top: 150px;
  
`;
const StyledPic = styled.div`
  position: relative;
width: 600px;
margin-top: 90px;
z-index: -1;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  

`;



const Patients = () => {



  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return ( 
    <StyledAboutSection id="patients" ref={revealContainer}>
    <h2  class=" numbered-heading reveal-block" data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400" >For Patients</h2>
  <div className="container-treatment">
  <Treatments/>
  </div>
  
   
  </StyledAboutSection>
    
  );

};



export default Patients;
