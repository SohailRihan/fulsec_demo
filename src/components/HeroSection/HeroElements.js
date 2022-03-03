import styled, { keyframes } from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ImageBg = styled.video`
  width: 100vw;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = keyframes`
   0%,18%,20%, 50.1%, 60%,65.1%,80%, 90.1%,92% {
       color : #0e3742;
       text-shadow: none;


   }
   18.1%,20.1%, 30%,50%, 100%{
       color: #fff;
       text-shadow: 0 0 10px #03bcf4,
       0 0 20px #03bcf4,
       0 0 40px #03bcf4,
       0 0 80px #03bcf4,
       0 0 160px #03bcf4;

   }

   
   

`

export const HeroH1 = styled.h1`
   letter-spacing: 15px;
   text-transform: uppercase;
   
   position: relative;
   -webkit-box-reflect : below 1px linear-gradient(transparent, #0008);
    line-height: 0.7em;
    outline: none;
   color: #fff;
   font-size: 48px;
   text-align: center;
   animation: ${Title} 5s linear infinite;
   
 
   @media screen and (max-width: 768px) {
     font-size: 30px;
   }
   @media screen and (max-width: 480px) {
     font-size: 32px;
   }
 `
 export const HeroP = styled.p`
   margin-top: 24px;
   color: #fff;
   font-size: 24px;
   text-align: center;
   max-width: 600px;


   @media screen and (max-width: 768px) {
     font-size: 24px;
   }
   @media screen and (max-width: 480px) {
     font-size: 18px;
   }


`

export const HeroBtnWrapper = styled.div`
   margin-top: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
   

`

export const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;


`

export const ArrowRight = styled(MdKeyboardArrowRight)`
   

`


