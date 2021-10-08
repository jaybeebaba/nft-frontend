import React, {forwardRef, useRef}  from "react"
import discord from "../images/discord.png"
import angry from "../images/angry.png"


const Spec =forwardRef(({ onBackClick }, ref) =>{

    // const titleRef = useRef()


    // function handleBackClick() {
    //     titleRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    return(
        <>
         <div ref={ref} className="boar-section">
            <div>
                <img src={angry} alt="" />
                <div>
                    <h1>Join the Boars</h1>
                    {/* <h1 onClick={handleBackClick}>Join the Boars</h1> */}
                    <p>Angry Boars is a collection of 10,000 unique, randomly generated wild boars roaming on the Ethereum blockchain as ERC-721 NFTs.</p>

                    <p onClick={onBackClick}>Every Angry Boar is unique and programmatically generated from over 250+ possible attributes and traits like background, skin, clothes, mouth, head, tusks, snout, eyes and more. Some boars are rarer than others.</p>

                    <p>Owning a boar gives you an unprecedented advantage and exclusive access to a plethora of members-only benefits spanning both the digital and real world.</p>
                </div>
            </div>

            <div>
                <ul>
                    <li>
                      <p>10,000</p>  
                       <p>10,000 random Angry Boars NFT</p> 
                    </li>

                    <li>
                      <p>0.04ETH</p>  
                       <p>Fair Launch and distribution - all boars have the same cost of 0.04 ETH</p> 
                    </li>

                    <li>
                      <p>©</p>  
                       <p>Includes creative and commercial rights usage of your boar for as long as you keep the NFT</p> 
                    </li>

                    <li>
                      <p>100%</p>  
                       <p>Unlock additional benefits through roadmap activations and future phases</p> 
                    </li>
                </ul>
            </div>
        </div>
        <div className="discord-section">
        {/* <div className="discord-section" ref={titleRef}> */}
            <div>
                <p>Join the Discord</p>
                <p>Giveaways every day until our launch on September 23rd!</p>
                <a className="btn" href="https://www.discord.gg">Discord <i className="fas fa-arrow-right"></i></a>
            </div>

            <img src={discord} alt=""/>
        </div>
        </>
    )
})

export default Spec