import React, { useState } from "react";
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroBtnWrapper, HeroP,ArrowForward, ArrowRight  } from "./HeroElements.js";
import Video from "../../videos/video.mp4";
// import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ButtonElement";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer id="home" >
      <HeroBg>
        <ImageBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>PLUG 'N' PLAY</HeroH1>
        <HeroP>
          FULSEC Technologies offers scalable low cost solution for most common and 
          pervasive Cyber Security risks faced by the organizations,
          ensuring effective protection.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter = {onHover} 
          onMouseLeave = {onHover} >
               Get started {hover ? <ArrowForward /> : <ArrowRight /> }</Button>

             
          
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
