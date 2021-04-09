import React from "react";
import Accordion from "./Accordion";
import './Accordion.scss'



import illustration__woman_desktop from "./heart.png";


const questionsAnswers = [
  {
    question: "Comprehensive Care",
    answer:
      "We just want to care for your mouth with a thorough check, gum care, scaling, digital X-rays and photographs. Getting you back on to flossing and good maintenance.",
  },
  {
    question: "Emergency Dentistry" ,
    answer:
      "Nullam tincidunt ac lorem sit amet varius. Quisque lobortis lacinia tellus eu mollis. Nam suscipit felis non erat lacinia, id interdum neque interdum. ",
  },
  {
    question: "Cosmetic Work",
    answer: `Nullam tincidunt ac lorem sit amet varius. Quisque lobortis lacinia tellus eu mollis. Nam suscipit felis non erat lacinia, id interdum neque interdum. `,
  },
  {
    question: "Sleep Dentistry",
    answer: `Nullam tincidunt ac lorem sit amet varius. Quisque lobortis lacinia tellus eu mollis. Nam suscipit felis non erat lacinia, id interdum neque interdum. Sed suscipit ultrices diam vitae mattis. `,
  },
  {
    question: "Root Canal",
    answer: `Nullam tincidunt ac lorem sit amet varius. Quisque lobortis lacinia tellus eu mollis. Pellentesque euismod, quam molestie vehicula gravida, eros erat tincidunt nulla, a semper felis est id risus.`,
  },
];

const Treatments = () => {
  return (
    <div className="container">
      <div className="component">
        <div className="illustration">
      

          <img
            className="illustration__heart-desktop"
            src={illustration__woman_desktop}
            alt="illustration with heart"
          />
      
        </div>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    
    </div>
  );
};

export default Treatments;
