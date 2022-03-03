import React from "react";
import styled from "styled-components";
import image from "../images/FulsecBot.png";
import {Button} from "../components/ButtonElement"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";

const Product = () => {
  const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <Section id={"products"}>
      <div className="center-vertical bg-dark">
        <div className="product-section bg-dark">
          <div className="product py-5">
            <div className="row align-items-center container my-5 mx-auto">
              <div className="text col-12 col-lg-6">
                <h2>Fulsec BOT</h2>
                <p>
                  Fulsec Services primarily include Automated Vulnerability
                  Discovery with Dashboard and Reports as an 'Essential' plan
                  performed by the Fulsec Plug-n-Play product for the protection
                  of your home networks from Intruders; Penetration Testing and
                  Security Analysis are offered as 'Professional' and
                  'Enterprise' plans aimed at mid-size and large IT companies'
                  technical environment such as Network and Firewall
                  Configuration, Web Applications and Webserver vulnerabilities
                  detection and Attack Testing performed by cybersecurity
                  analysts with the Fulsec Plug-n-Play device followed up by a
                  detailed manual report on the necessary changes to the
                  vulnerable practices in effect.
                </p>
                <Button to="signup" onMouseEnter = {onHover} 
          onMouseLeave = {onHover} >
               Get started {hover ? <ArrowForward /> : <ArrowRight /> }</Button>
              </div>
              <div className="img col-12 col-lg-6 mb-6 mb-lg-0">
                  <img className="img-fluid" src = {image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  
   .center-vertical{
    
    width: 100%;
    min-height: 100vh;
    align-items: center;
   }

   .product-section{
     
  
     

   }

   .product-section .text{
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: flex-start;
     margin-top: 70px;


   }
   .product-section .text h2{
     color: #00BF76;
     font-weight: 700;
     font-size: 2.7rem;



   }
   .product-section .text p{
     color: #f7f5f4;
     font-weight: 400;
     font-size: 1.1rem;
     letter-spacing: 0.5px;



   }

   
   .product-section .img{
     margin-top: 40px;
   }
   
 
   
`
const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;


`

const ArrowRight = styled(MdKeyboardArrowRight)`
   

`


export default Product;
