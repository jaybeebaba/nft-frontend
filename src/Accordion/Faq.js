import React, {forwardRef,useRef} from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import "./styles.css"

 const Faq = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={Math.random()} title={title} content={content} />
        ))}
      </div>
    </div>
  );
});

export default Faq