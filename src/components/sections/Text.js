import React, { Component , useEffect} from 'react';
import './Text.scss'
import AOS from 'aos';
import "aos/dist/aos.css";


const textArray = ['teeth whitening', 'root canals', 'mouthguards', 'tmj therapy', 'peadiatric dentistry', 'sleep dentistry', 'cosmetic work'];


class Text extends Component {



  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section className="move">    
        <p className="text-move"> We offer <span className="animate">{textThatChanges}</span></p>
      </section>
    )
  }
}

export default Text;