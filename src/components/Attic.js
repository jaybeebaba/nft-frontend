import React, {forwardRef, useRef} from "react";
import "../styles/Attic.css";
import attic from "../images/attic.png"

const Attic = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className="attic">
      <p>The Attic</p>
      <p>
      Not much is known about these angry boars at this time. It is up to us to find out their story and uncover their secrets.
For now, we just know about The Attic. We need to dust it up and search for the next clue.
      </p>
      <img src={attic} alt=""/> 

     


      
       
        <marquee direction="left" >— ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING SOON —
          ANGRY BOARS ARE COMING
          — ANGRY BOARS ARE COMING</marquee>
                  
          
      
     
      
    </div>
  );
});

export default Attic;
