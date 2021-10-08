import React, {useState, useRef}  from "react"

const NavBar = (props) =>{
    const [isOpen, setIsopen] = useState(true)

    
    const handleCLick = ()=>{
        setIsopen(!isOpen)
    }

    const handleBackClick =()=>{
        props.specRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    
    
    return(
        <div className="nav-bar">
            <h1>ANGRY BOARS</h1>
            <ul className={ isOpen? ""  : "open" } >
                <li>Home</li>
                <li ref={props.specRef} onBackClick={handleBackClick}>Specs</li>
                <li>Community</li>
                <li>Roadmap</li>
                <li>The Attic</li>
                <li>Team</li>
                <li>FAQ</li>
                <li className="btn" style={{textAlign: "center"}}>SOLD OUT</li>
            </ul>

            {isOpen? <img onClick={handleCLick} className="hamburger" src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" alt=""/> :( <div onClick={handleCLick} className="hamburger"><i className="fas fa-times"></i></div>)}
        </div>
    )
}

export default NavBar