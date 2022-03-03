import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaStopCircle} from "react-icons/fa"
import { FaCheck, FaRocket, FaTelegramPlane, FaEmpire  } from "react-icons/fa";
import {Button} from "../components/ServicesButton.js"



const Services = () => {
  return (
    <Section id={"services"}>
      <section class="price-sec">
        <div class="container-fluid">
          <div class="container">
            <div class="row ptables-head">
              <h1 class="text-center">Our Services</h1>
            </div>
            <div class="row">
              <div class="col-sm-4 price-table">
                <div class="card text-center">
                  <div class="title">
                    <i className="fa fa-paper-plane"><FaTelegramPlane /></i>
                    <h2>Essential</h2>
                  </div>
                  <div class="price">
                    <h4></h4>
                  </div>
                  <div class="option">
                    <ul>
                      <li>
                        <i class="fa "><FaCheck /></i> Discover Network Devices
                      </li>
                      <li>
                        <i class="fa "><FaCheck /></i> Assess The Right
                        Vulnerabilities (ARV)
                      </li>
                      <li>
                        <i class="fa "><FaCheck /></i> Breach And Attack Assessment
                        (BAA)
                      </li>
                      <li>
                        <i class="fa "><FaCheck /></i> Security Analytics &
                        Compliance Reports (SAR)
                      </li>
                      <li>
                      <i class="fa"><FaStopCircle /></i> Attack Exercises (ATT & CKE)
                      </li>
                      <li>
                        <i class="fa "><FaStopCircle /></i>  Penetration And Attack Testing (PAT)
                      </li>
                      <li>
                        <i class="fa "><FaCheck /></i> Security Advisories
                      </li>
                      <li>
                        <i class="fa "><FaCheck /></i> Dedicated Chat Suppor
                      </li>
                    </ul>
                  </div>
                  
                  <Button to="signup">Purchase Now</Button>
                 
                </div>
              </div>


              <div class="col-sm-4 price-table">
                <div class="card text-center">
                  <div class="title">
                    <i class="fa fa-plane"><FaRocket /></i>
                    <h2>Professional</h2>
                  </div>
                  <div class="price">
                    <h4>
                      
                    </h4>
                  </div>
                  <div class="option">
                    <ul>
                      <li>
                        <i class="fa fa-check"><FaCheck /></i> Discover Network Devices
                      </li>
                      <li>
                        <i class="fa fa-check"><FaCheck /></i> Assess The Right
                        Vulnerabilities (ARV)
                      </li>
                      <li>
                        <i class="fa fa-check"><FaCheck /></i> Breach And Attack Assessment
                        (BAA)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Security Analytics &
                        Compliance Reports (SAR)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i>  Penetration And Attack Testing (PAT)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaStopCircle /></i> Attack Exercises (ATT & CKE)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Security Advisories
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Dedicated Chat Suppor
                      </li>
                    </ul>
                  </div>
                  
                  <Button to="signup">Purchase Now</Button>
                  
                </div>
              </div>

              <div class="col-sm-4 price-table">
                <div class="card text-center">
                  <div class="title">
                    <i class="fa fa-rocket"><FaEmpire /></i>
                    <h2>Enterprise</h2>
                  </div>
                  <div class="price">
                    <h4></h4>
                  </div>
                  <div class="option">
                    <ul>
                      <li>
                        <i className="fa fa-check"><FaCheck /></i> Discover Network Devices
                      </li>
                      <li>
                        <i class="fa fa-check"><FaCheck /></i> Assess The Right
                        Vulnerabilities (ARV)
                      </li>
                      <li>
                        <i class="fa fa-check"><FaCheck /></i> Breach And Attack Assessment
                        (BAA)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Security Analytics &
                        Compliance Reports (SAR)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Security Advisories
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Attack Exercises (ATT & CKE)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i>  Penetration And Attack Testing (PAT)
                      </li>
                      <li>
                        <i class="fa fa-times"><FaCheck /></i> Dedicated Chat Suppor
                      </li>
                    </ul>
                  </div>
                  
                  <Button to="signup">Purchase Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

const Section = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300");
  @import url("https://fonts.googleapis.com/css?family=Domine:700");
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif !important;
  }

  .price-sec {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 100px 0px;
    background-color: #eee;
  }
  .price-sec .ptables-head {
    font-family: "Domine", serif;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.3);
    padding: 30px 0;
    margin: 0px 0px 100px 0px;
    border-radius: 10px;
    background: linear-gradient(25deg, #feae3f 15%, transparent 0%),
      linear-gradient(-25deg, #f321d7 15%, transparent 0%),
      linear-gradient(-150deg, #64b5f6 15%, transparent 0%),
      linear-gradient(150deg, #f47 15%, transparent 0%);
  }
  @media all and (max-width: 600px) {
    .ptables-head h1 {
      font-size: 30px;
    }
  }

  .price-sec .price-table {
    margin: 5px 0px;
  }
  .price-sec .price-table .card {
    position: relative;
    max-width: 500px;
    height: auto;
    background: linear-gradient(-45deg, #fe0847, #feae3f);
    border-radius: 15px;
    margin: 0 auto;
    padding: 40px 20px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    overflow: hidden;
  }
  .price-sec .price-table .card:hover {
    transform: scale(1.1);
  }

  .price-table:nth-child(1) .card,
  .price-table:nth-child(1) .card .title i {
    background: linear-gradient(-45deg, #f403d1, #64b5f6);
  }
  .price-table:nth-child(2) .card,
  .price-table:nth-child(2) .card .title i {
    background: linear-gradient(-45deg, #fe6c61, #f321d7);
  }

  .price-table:nth-child(3) .card,
  .price-table:nth-child(3) .card .title i {
    background: linear-gradient(-45deg, #24ff72, #9a4eff);
  }
  .price-table .card:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
    transform: skewY(-5deg) scale(1.5);
  }
  .price-table .title i {
    color: #fff;
    font-size: 60px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .price-table .title h2 {
    position: relative;
    margin: 20px 0 0;
    padding: 0;
    color: #fff;
    font-size: 28px;
    z-index: 2;
  }
  .price-table .price {
    position: relative;
    z-index: 2;
  }
  .price-table .price h4 {
    margin: 0;
    padding: 20px 0;
    color: #fff;
    font-size: 60px;
  }
  .option {
    position: relative;
    z-index: 2;
  }
  .option ul {
    margin: 0;
    padding: 0;
  }
  .option ul li {
    margin: 0 0 10px;
    padding: 0px 15px;
    list-style: none;
    color: #fff;
    font-size: 16px;
  }


  

  
`;

export default Services;
