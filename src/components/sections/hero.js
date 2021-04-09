import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '../../utils';
import Dental from "./../../images/dent1.png";
import Frame from "./../../images/frame.png";
import Tooth from './../icons/tooth'
import AOS from 'aos';
import "aos/dist/aos.css";
import Text from './Text'
import "./heroComp.scss";





const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }


`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);



  return (
    <StyledHeroSection>

<div className="hero__section hero-block" id="scene" > 
        <li className="DentalImg__Wrapper layer" data-depth="0.50">
          <img 
            id="myImg"
            src={Dental}
            alt="Dental"
          /> 
    
              <img
            id="myImg2"
            src={Frame}
            alt="Dental"
          />
        </li>
        <h2 id="heading-dent" class="revealblock" data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400">Dental Clinic</h2>
     <Text/>
 
     <div className="v-button">
     <button className="visit-button">Organise your visit </button>
     <div className="tooth">
       <Tooth/>
     </div>
     </div>
 
    
      
   
        </div>
    </StyledHeroSection>
  );
};

export default Hero;
