import React from "react";
import image1 from "../images/27001-2.png";
import image2 from "../images/FulSec-9001_2.png";
import styled from "styled-components";

const Achievements = () => {
  return (
    <Section id={"achievements"}>
      <div className="center-vertical bg-dark">
        <div className="about-us-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="img-head">
                  <img src={image1} />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="text-head">We Are ISO 27001 Certified</h2>
                <div className="break-small mb-5"></div>
                <p className="text-para">
                  ISO 27001:2013 is an official standard for the information
                  security of organizations. Unauthorized access to protected
                  information is a key risk that needs to be continually
                  addressed. Organizations seeking the ISO 27001:2013
                  certification typically undergo a rigorous sequence of events
                  in an effort to ensure a solid
                  ISMS(Information-Security-Management-System) spanning the
                  entire organization. <br />
                  <br />
                  ISO 27001:2013 Controls clearly spells out the need to define
                  roles and responsibilities, ensure authorized access and
                  monitor all access on a regular basis.
                  <br />
                  <br />
                  We at Fulsec Technologies are compliant with the ISO
                  27001:2013 Controls and take a steadfast approach to
                  Information Security.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-12 col-lg-6 ">
                <h2 className="text-head">We Are ISO 9001 Certified</h2>
                <div className="break-small mb-5"></div>
                <p className="text-para">
                  ISO 9001:2015 is an international standard dedicated to
                  Quality Management Systems (QMS). <br />
                  <br />
                  It outlines a framework for improving quality and a vocabulary
                  of understanding for any organization looking to provide
                  products and services that consistently meet the requirements
                  and expectations of customers and other relevant interested
                  parties in the most efficient manner possible.
                  <br />
                  <br />
                  We at Fulsec Technologies are aligned with the principles of
                  the ISO 9001:2015 and focused towards delivering quality and
                  impactful service to our clients.
                </p>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-2 ">
                <div className="img-head">
                  <img src={image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  .center-vertical {
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
  }
  .about-us-section {
    width: 100%;
    padding: calc(5% + 40px) 0px;
  }
  .about-us-section .img-head {
    position: relative;
    overflow: hidden;
    height: 100%;
    @media screen and (max-width:769px){
      margin-top:20px
    }
  }
   
  
  .about-us-section .img-head img {
    width: 100%;
    
  }
  .about-us-section .text-head {
    font-size: 28px;
    color: #16c79a;
    font-weight: bold;
    margin-top: 65px;
  }


  `;

export default Achievements;
