import React, {forwardRef, useRef} from "react";
import "../styles/Team.css";
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"

const Team = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className="team">
      <p>Team Members</p>
      <p>
      Angry Boars is a project made by a team of close real-life friends, consisting of NFT collectors & enthusiasts, marketing geeks, an outstanding street artist moving to this new space, and blockchain advocates - our mighty devs.
      </p>

      <ul>
          <li>
          <img src={img1} alt=""/>
          <h1>Necemu</h1>
          <p>Digital marketing geek by day, NFT enthusiast by night. I like to play video games and take long walks.</p>
          <a href="#"><i className="fab fa-twitter-square"></i></a> 
          </li>

          <li>
          <img src={img2} alt=""/>
          <h1>Necemu</h1>
          <p>Digital marketing geek by day, NFT enthusiast by night. I like to play video games and take long walks.</p>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          </li>

          <li>
          <img src={img3} alt=""/>
          <h1>Necemu</h1>
          <p>Digital marketing geek by day, NFT enthusiast by night. I like to play video games and take long walks.</p>
          <a href="#"><i className="fab fa-twitter-square"></i></a>
          </li>

          <li>
          <img src={img4} alt=""/>
          <h1>Necemu</h1>
          <p>Digital marketing geek by day, NFT enthusiast by night. I like to play video games and take long walks.</p>
          <a href="#"><i className="fab fa-instagram"></i></a>
          </li>

          <li>
          <img src={img5} alt=""/>
          <h1>Necemu</h1>
          <p>Digital marketing geek by day, NFT enthusiast by night. I like to play video games and take long walks.</p>
          <a href="#"><i className="fab fa-twitter-square"></i></a>
          </li>
      </ul>

     

          
      
     
      
    </div>
  );
});

export default Team;
