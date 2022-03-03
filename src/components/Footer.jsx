import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.jpeg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk, FaClock } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaMobile, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Section>
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <img src={Logo} />
            <p>
              For additional information about FULSEC Products & Services, Call
              or Email us today so that we can address your query at the
              earliest! We are at your service 24*7.
            </p>

            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fa " aria-hidden="true">
                    <FaInstagramSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa " aria-hidden="true">
                    <FaTwitterSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa " aria-hidden="true">
                    <FaFacebookSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa " aria-hidden="true">
                    <FaYoutubeSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa " aria-hidden="true">
                    <FaLinkedin />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms & Conditons</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><i className="fa" aria-hidden = "true"><FaMapMarker /></i>USA Office:</span><br />
                <span>
                  Address: 5135 Montego Bay Dr,<br />Irving, Texas 75038, USA
                </span><br />
                <span><i className="fa" aria-hidden = "true"><FaMobile /></i>Phone:</span>
                <span>
                +1 4435011617
                </span><br />
              </li>
              <li>
                <span><i className="fa" aria-hidden = "true"><FaMapMarker /></i>India Office:</span><br />
                <span>
                Address: #309, KTC Building,<br />Image Hospital Road, Madhapur, <br />Hyderabad - 500081
                </span><br />
                <span><i className="fa" aria-hidden = "true"><FaMobile /></i>Phone:</span>
                <span>
                +91 9912921751
                </span><br />
              </li>
              <li>
                  <span><i className="fa" aria-hidden = "true"><FaEnvelope /></i></span>
                  <span><a href="mailto: info@fulsec.com"> info@fulsec.com</a></span>
              </li>
              
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
          <p>© 2020 FULSEC Technologies, All Rights Reserved.</p>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* min-height: 100vh; */
  flex-direction: column;
  background: #ede7f6;

  footer {
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    background: #111;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  footer .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  footer .container .sec {
    margin-right: 30px;
  }
  footer .container .aboutus {
    width: 40%;

    @media screen and (max-width:786px){
        width: 100%;
        
    }
  }
  footer .container img {
    position: relative;
    margin-bottom: 15px;
  }
  footer p {
    color: #999;
  }
  .sci {
    margin-top: 20px;
    display: flex;
  }
  .sci li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
  }
  .sci li a:hover {
    background: #00bf76;
  }
  .sci li a .fa {
    color: #fff;
    font-size: 20px;
  }
  footer .container h2 {
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
  }
  footer .container h2:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f00;
  }
  .quickLinks {
    position: relative;
    width: 25%;
  }
  .quickLinks ul li {
    list-style: none;
  }
  .quickLinks ul li a {
    color: #999;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
  .quickLinks ul li a:hover {
    color: #fff;
  }
  .contact{
      width:auto;
      margin-right: 0;
  }
  .contact .info li{
      /* display: flex; */
      margin-bottom: 16px;
      list-style: none;


  }
  .contact .info li span :nth-child(1){
      color: #fff;
      font-size: 20px ;
      margin-right: 10px;

  }
  .contact .info li span{
      color: #999;
  }
  .contact .info li span a{
      text-decoration: none;
  }
  .copyrightText{
      width: 100%;
      background: #181818;
      padding: 8px 100px;
      text-align: center;
      color: #999;

  }
  @media screen and (max-width:991px) {
      footer{
          padding: 40px;
      }
      footer .container{
          flex-direction: column;
      }
      footer .container .sec{
          margin-right: 0;
          margin-bottom: 40px;

      }
      footer .container .sec .aboutus,
      .quickLinks,
      .contact {
          width: 100%;
      }
      
  }

`;

export default Footer;
