import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import productBrief from "../images/productbrief.png";
import documents from "../images/documents.png";
import infograph from "../images/infograph.png";
import partner from "../images/partner.png";
import publications from "../images/publications.png";
import videos from "../images/videos.png";

const Resources = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 700,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
    
  };
  return (
    <Section id="resources">
      <div className="container mt-5 carousel">
        <h1 className="slider_title">Our Resources</h1>
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={videos} />
              </div>
              <div className="details">
                <h1>Videos</h1>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={partner} />
              </div>
              <div className="details">
                <h1>Partner Material</h1>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={publications} />
              </div>
              <div className="details">
                <h1>Publications</h1>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={infograph} />
              </div>
              <div className="details">
                <h1>InfoGraphics</h1>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={documents} />
              </div>
              <div className="details">
                <h1>Reports & Papers</h1>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={productBrief} />
              </div>
              <div className="details">
                <h1>Product Brief</h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #333;
  
  

  .slider_title {
    font-size: 5vw;
    color: #00bf76;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2vw;
    margin-top: 90px;
  }
  .card-wrapper {
    position: relative;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 80px;
    &:active,
    &:hover,
    &:focus {
      outline: none;
      border: none;
    }
  }
  .card {
    width: 100%;
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
  }
  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #000;
    transition: 0.5s;
  }
  img {
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
  }

  .card-image:hover {
    transform: translateY(-90px);
    transition: 0.9s;
  }
  .details {
    position: absolute;
    bottom: 400px;
    left: 0;
    background: #fff;
    width: 100%;
    height: 120px;
    z-index: 1;
    padding: 10px;
    transition: 0.2s;
    h1 {
      margin: 30px 0;
      padding: 0;
      text-align: center;
      display: block;
      color: #000;
      font-weight: 400;
    }
  }
  .card:hover {
    .details {
      bottom: 0;
    }
  }
  .carousel{
      slick-dots{
          bottom: {
              width:20px;
              height: 20px;
              border: 1px solid #fff;

          };
      }
  }

  @media screen and (max-width:786px) {
    .slider_title {
        font-size: 35px;
        padding-top: 100px ;
    }
    .card-wrapper{
        margin-top: 10px;
    }
  }
`;

export default Resources;
