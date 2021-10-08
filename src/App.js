import React, {froWardRef, useRef, useState} from "react"
import Attic from "./components/Attic";
import Community from "./components/Community";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Spec from "./components/Spec";
import Team from "./components/Team";
import Accordion from "./Accordion/Faq"
import Roadmap from "./components/Roadmap"




function App() {

  const [isOpen, setIsopen] = useState(true)

    
    const handleCLick = ()=>{
        setIsopen(!isOpen)
    }

    const specRef = useRef()
    function handleSpecScroll() {
      specRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const communityRef = useRef()
  function handleCommunityScroll(){
    communityRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const atticRef = useRef()
  function handleAtticScroll(){
    atticRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const roadmapRef = useRef()
  function handleRoadmapScroll(){
    roadmapRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const teamRef = useRef()
  function handleTeamScroll(){
    teamRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const accordionRef = useRef()
  function handleAccordionScroll(){
    accordionRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const topRef = useRef()
  function handleTopScroll(){
    topRef.current.scrollIntoView({behaviour: 'smooth'})
  }

  
  return (
    <div className="App">
     <div ref={topRef} className="nav-bar">
            <h1>ANGRY BOARS</h1>
            <ul className={ isOpen? ""  : "open" } >
                <li>Home</li>
                <li onClick={handleSpecScroll}>Specs</li>
                <li onClick={handleCommunityScroll}>Community</li>
                <li onClick={handleRoadmapScroll}>Roadmap</li>
                <li onClick={handleAtticScroll}>The Attic</li>
                <li onClick={handleTeamScroll}>Team</li>
                <li onClick={handleAccordionScroll}>FAQ</li>
                <li className="btn" style={{textAlign: "center"}}>SOLD OUT</li>
            </ul>

            {isOpen? <img onClick={handleCLick} className="hamburger" src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" alt=""/> :( <div onClick={handleCLick} className="hamburger"><i className="fas fa-times"></i></div>)}
        </div>
      <Project/>
      <Spec ref={specRef}/>
      <Community ref={communityRef}/>
      <Roadmap ref={roadmapRef}/>
      <Attic ref={atticRef}/>
      <Team ref={teamRef}/>
      <Accordion ref={accordionRef}/>
      <Footer/>

      <div onClick={handleTopScroll} className="top"> Back to top </div>

    </div>
  );
}

export default App;
