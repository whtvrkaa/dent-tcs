import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import './Accordion.scss'
import AOS from 'aos';
import "aos/dist/aos.css";

const Accordion = ({ questionsAnswers}) => {
  const [activeIndex, setActiveIndex] = useState(1);
 


  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <h1 class="reveal-block faq__title" data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400">TREATMENTS</h1>
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion;
