import React, {forwardRef, useRef} from "react";
import "../styles/community.css";
import gif from "../images/gif.gif"

const Community = forwardRef(({ onBackClick }, ref) =>{
  return (
    <div ref={ref} className="community">
      <p>A Community Project</p>
      <p>
        We aim to be a community and utility oriented project. We want holders
        to have unique and exciting benefits and that's why we're raising the
        bar when it comes to what we're offering.
      </p>

      <div>
        <div>
          <p>
            1. We will have at least 2 Companion Collections this year that will
            be free (+gas) for boar holders. This will complement the story
            development and other characters that are part of the Angry Boars'
            universe.
          </p>

          <p>
            2. We believe that our holders deserve the best and that's why 50%
            of royalties from secondary sales will return to boar holders each
            month, through various giveaways, prizes, and raffles. The boars
            will be able to vote on what we raffle each month back to the
            community. In this way, our goal is to keep everyone engaged with
            the project and excited about future developments. Royalties will be
            set at 2.5% for secondary sales.
          </p>

          <p onClick={onBackClick}>
            3. We have a lot of interesting additional benefits & giveaways
            prepared for our members, that will be unlocked through roadmap
            activations and future phases. (Tesla and other giveaways for
            holders)
          </p>
        </div>

        <img src={gif} alt=""/> 
      </div>
    </div>
  );
});

export default Community;
