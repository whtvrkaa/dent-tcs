import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from './../../config';
import sr from './../../utils/sr';
import Slider from './Slider'
import AOS from 'aos';
import "aos/dist/aos.css";
import './animation.scss'


const StyledTeamSection = styled.section`

  max-width: 1300px;
  max-height: 1000px;

  .numbered-heading-3{
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 100px;
    
    width: 100%;
    font-size: 40px;
 
    color: black;
  


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
position: absolute;
margin-top: 10%;
max-width: 600px;
z-index: 2;

.small-text {
  font-size: 17px;
    max-width: 200px;
    margin-left: 29%;
    margin-top: 10%;
  }
 
  .header-2{
    position: relative;
 margin-left: -10px;
font-size: 32px;
color: black;

&:after {
content:''; 
position: absolute;
display:block; 
width: 240px; 
height: 4px; 
background: #52C89D; 
margin-left: 58%; 
margin-top: -5px; 
border-radius:3px;}
}
  
`;



const Team = () => {
 


  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);



  // Only re-run the effect if tabFocus changes


  return (
    <StyledTeamSection className="home-block" id="team" ref={revealContainer}>
      <h2 class="numbered-heading-3 reveal-block" data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400">Our Team</h2>
      <div className="inner">
 <StyledText>
      <h2 className="header-2 reveal-block" data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400">We love to see you smile. </h2>
<p className="small-text">Dent is a small but strong team that loves everything dental.</p>
    
</StyledText>
           <Slider/>
            

      </div>
    
    </StyledTeamSection>
  );
};

export default Team;
