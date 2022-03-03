import React from "react";
import partner1 from "../images/orbit-software-solutions-signature.png";
import partner2 from "../images/launch-ship.png";
import client from "../images/salient-cyber-sol.png";
import styled from "styled-components";

const partners = () => {
  return (
    <Section id="partners">
      <div className="container my-container">
        <div className="row my-row">
          <h1 >Our Partners</h1>
          <div className="col-md-5 col-sm-5 my-col">
            <img src={partner1} />
          </div>
          <div className="col-md-3 col-sm-5 my-col">
            <img src={partner2} />
          </div>
        </div>
        <div className="row my-row">
          <h1>Our Clients</h1>
          <div className="col my-col  ">
            <img src={client} />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;


  .my-row h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #00bf76;
    font-weight: 400px;
    margin-top: 80px;
  }
  
  .my-col {
    @media screen and (max-width: 786px) {
      width: 500px;
    }
  }

  .my-col img {
    width: 500px;

    @media screen and (max-width: 976px) {
      width: 300px;
    }
  }
`;

export default partners;
