import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from './../../config';
import sr from '@utils/sr';
import AOS from 'aos';
import "aos/dist/aos.css";




const StyledAboutSection = styled.section`


  .img-2{
    border-radius: 20px;
    width: 550px;
    height: 450px;
    background-position: -565px -295px;
    background-repeat: no-repeat;
    box-shadow: 0px 50px 50px -20px rgba(18, 65, 122, 0.497);
    border-radius: 23px;
    display: flex;
  }
  
 
  .header-2{
 
color: black;
font-size: 54px;
margin-left: 30%;

&:after {
content:''; 
position: absolute;
display:block; 
width:240px; 
height:4px; 
background: #F2E934 ; 
margin-left: 150px; 
margin-top:-10px; 
border-radius:3px;}
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
  p {
    max-width: 190px;
    position:absolute;
    font-size: 17px;
    margin-left: 130px;
  
  }
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



const About = () => {

  let AOS;
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "hands.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);



  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2  class=" numbered-heading reveal-block"  data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="600">Our Practice</h2>
    
      <div className="inner">
        <StyledText>
          <div>
          <h2 className="header-2 reveal-block" data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400">About us</h2>
            <p class="small-text">
            Morbi eget semper turpis. Cras porta, felis in pharetra fermentum, est massa sollicitudin tortor, convallis hendrerit mi erat id sem. In malesuada purus a lacus imperdiet, in ullamcorper diam posuere. Cras id ligula nulla. Vivamus ultrices lorem a neque dignissim faucibus.
            </p>        
          </div>
     
        
        </StyledText>

        <StyledPic>
    
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img-2"  />
    
        </StyledPic>
      </div>

    </StyledAboutSection>
  );
};

export default About;
