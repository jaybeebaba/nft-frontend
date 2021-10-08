import React, {useRef}  from "react"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.png"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.png"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.png"

const Project = () =>{


    
    return(
        <>
        <div className="project">
            <aside className="social-links">
                <h1>
                    The project you've been waiting for...
                </h1>

                <p> WE ARE SOLD OUT! Check our collection on OpenSea!</p>

                <a className="btn" href="https://www.opensea.io">OpenSea <i className="fas fa-arrow-right"></i></a>

                <p>Angry Boars is a community-oriented project where members vote on future development of the project.</p>

                <p> The Public Sale starts on <span>September 23 @ 4:30PM UTC</span>.  The mint proce will be 0.04ETH. For morre details about our main sale, <span>join us on Discord</span></p>

                <div className="buttons">
                    <a className="btn" href="https://www.discord.gg">Discord <i className="fas fa-arrow-right"></i></a>
                    <a className="btn" href="https://www.twitter.com">Twitter <i className="fas fa-arrow-right"></i></a>
                </div>
            </aside>

                <div className="image-frame">
                    <div>
                        <img src={img1}  alt=""/>
                        <img src={img2} alt=""/>
                        <img src={img3}  alt=""/>
                        <img src={img4}  alt=""/>
                        <img src={img5} alt=""/>
                    </div>

                    <div>
                        <img src={img6} alt=""/>
                        <img src={img7}  alt=""/>
                        <img src={img8}  alt=""/>
                        <img src={img9}  alt=""/>
                        <img src={img10}  alt=""/>
                    </div>
                    
                    
                </div>
        </div>
        </>
    )
}

export default Project