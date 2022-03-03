import React from "react";
import image from "../images/cybersecurity (1).png";
import styled from "styled-components";

const Company = () => {
  return (
    <Section id={'about'}>
      <div className="center-vertical bg-dark">
        <div className="about-us-section bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="img-head">
                  <img src={image} />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="text-head">Know More About Company</h2>
                <div className="break-small mb-2"></div>
                <h2 className="text-para">
                  FULSEC Is Founded By Intelligent Business Heads With Their
                  Proven Corporate And Entrepreneurial Track Record
                </h2>
                <div className="row">
                  <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <div className="box">
                      {/* <i className="fa fa-users mb-3"></i> */}
                      <h4 className="mb-0">VISION</h4>
                      <p className="mb-0">
                        To provide “Cyber Security Risk Assessment and
                        Intelligence” to combine with People, Processes,
                        Technologies, Operations and Data.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <div className="box">
                      {/* <i className="fa fa-users mb-3"></i> */}
                      <h4 className="mb-0">GOALS</h4>
                      <p className="mb-0">
                        To deliver an exceptional, efficient, reliable and low
                        cost services to IT infrastructures within modern
                        information systems.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <div className="box">
                      {/* <i className="fa fa-users mb-3"></i> */}
                      <h4 className="mb-0">MISSION</h4>
                      <p className="mb-0">
                        To deliver an exceptional, efficient, reliable and low
                        cost services to IT infrastructures within modern
                        information systems.
                      </p>
                    </div>
                  </div>
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

    @media screen and (max-width: 769px) {
      padding-top: 140px;
    }
  }
  .about-us-section .img-head {
    position: relative;
    overflow: hidden;
    height: 100%;
    border: 1px solid white;
    border-radius: 20px;
  }
  .about-us-section .img-head img {
    width: 100%;
    transition: transform 0.3s;
  }
  .about-us-section .img-head:hover img {
    transform: scale(1.2);
  }
  .about-us-section .img-head::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right bottom, #19456b, #16c79a);
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
  .about-us-section .text-head {
    font-size: 28px;
    color: #16c79a;
  }
  .about-us-section .text-para {
    color: #fff;
  }
  .about-us-section .break-small {
    width: 80px;
    height: 3px;
    background-color: #16c79a;
  }
  .about-us-section .box {
    background-color: #16c79a;
    color: #fff;
    text-align: center;
    padding: 15px 0px;
    position: relative;
    overflow: hidden;
    border: 1px solid white;
    border-radius: 20px;
    margin-top: 25px;
  }
  /* .about-us-section .box i{
    font-size: 42px;

  } */
  .about-us-section .box h4 {
    font-size: 22px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  .about-us-section .box p {
    font-size: 14px;
  }
  .about-us-section .box::after,
  .about-us-section .box::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #fff5;
    border-radius: 50%;
    transition: transform 0.3s;
  }
  .about-us-section .box::after {
    left: -50px;
    top: -50px;
  }
  .about-us-section .box::before {
    right: -50px;
    bottom: -50px;
  }
  .about-us-section .box:hover::after,
  .about-us-section .box:hover::before {
    transform: scale(1.2);
  }
`;

export default Company;
