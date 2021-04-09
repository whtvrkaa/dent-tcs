
import { Form, Button } from 'react-bootstrap';
import './form.scss'
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from './../../utils/sr';
import AOS from 'aos';
import "aos/dist/aos.css";
import {MdAddLocation} from 'react-icons/md'
import IconLogo2 from './../icons/logo2'
import IconLogo from './../icons/logo'



const StyledAboutSection = styled.section`


  max-width: 900px;
  .info-container{
    margin-top: -28%;
  }
 #info{
   color: #2A3B44;
   font-size: 25px;
 }

.logo2{
  position: absolute;
  width: 120px;
  margin-left: 40%;
  margin-top: -20%;
}
.logo-dent{
  margin-top: -40%;
  width: 190px;
  padding-bottom: 20% ;
}
  .header-2{
    margin-top: -150px;
    margin-left: -510px;
    color: black;

font-size: 50px;

&:after {
content:''; 
position: absolute;
display:block; 
width:280px; 
height:4px; 
background: #33C1FF; 
margin-left: 350px; 


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

const Contact = () => {

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = event => {
    event.preventDefault();

    console.log('We will fill this up shortly.');
    // code to trigger Sending email
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <StyledAboutSection id="contact"  ref={revealContainer}>
      <h2  class="numbered-heading reveal-block" data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400" >Contact</h2>
      <div className="form-container">
      <div className="inner">
  
        <StyledText>
          <div>
          <h2 className="header-2 reveal-block"     data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400">Organise your visit</h2>
            <p>
            Get in touch on  (02) 6282 7711 </p>
            <a>Email us hello@dental.com</a>
            <p>
Please contact us via this website or email without disclosing confidential information.
            </p>
<div className="logo2">
<IconLogo2 />
</div>
      

           
          </div>

        
        </StyledText>

      
      </div>


 

 
      <form onSubmit={sendEmail}>
        <Form.Group className="form" controlId="name">
        
          <Form.Control
         className="form"
            type="text"
            name="name"
            value={state.name}
            placeholder="Full Name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="form" controlId="email">
      
          <Form.Control
           className="form"
            type="text"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group  className="form" controlId="subject">
          <Form.Control
      className="form"
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Telephone"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group  className="form" controlId="subject">
        
          <Form.Control
           className="form"
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button className="button1" variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
    <div className="info-container">
    <div className="info-hours">
    <div className="logo-dent"><IconLogo/></div>
    
      <h2 id="info">Opening Hours</h2>
      <p>Monday to Friday 8am-4pm</p>
      </div>
      <div className="info-loc">
      <h2 id="info">Location</h2>
      <a href="">
      <MdAddLocation className="icon"/> 
      <p className="adress">Unit 7, Dental Therapy Center, London</p>
      </a>

      </div>
      </div>
 
    </StyledAboutSection>
  );
};

export default Contact;
