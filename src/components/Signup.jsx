import React from 'react'
import styled from 'styled-components'
import location from "../images/location.png"
import email from "../images/email.png"
import phone from "../images/phone.png"
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook  } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Signup = () => {
  return (
      <Section id='signup'>
          <div className='container'>
              <div className='form'>
                  <div className='contact-info'>
                      <h3 className='title'>Let's get in touch</h3>
                      <p className='text'>
                        We will get back to you within 24 hours, or you can call us everyday, 10:00 AM - 18:00 PM
                      </p>

                      <div className='info'>
                          <div className='information'>
                              <img src={location} className='icon' alt='' />
                              <p>Address: #309, KTC Building, Image Hospital Road, Madhapur, Hyderabad - 500081</p>
                          </div>
                          <div className='information'>
                              <img src={email} className='icon' alt='' />
                              <p> info@fulsec.com</p>
                          </div>
                          <div className='information'>
                              <img src={phone} className='icon' alt='' />
                              <p>+91 9912921751</p>
                          </div>
                      </div>
                      <div className='social-media'>
                          <p>Connect with us :</p>
                          <div className='social-icons'>
                              <a href='#'>
                                 <FaFacebook />
                              </a>
                              <a href='#'>
                                 <FaInstagram />
                              </a>
                              <a href='#'>
                                  <FaTwitter />
                              </a>
                              <a href='#'>
                                  <FaLinkedin />
                              </a>
                              <a href='#'>
                                  <FaYoutube />
                              </a>
                                  
                          </div>
                      </div>

                  </div>

                  <div className='contact-form'>
                      <span className='circle one'></span>
                      <span className='circle two'></span>

                      <form>
                          <h3 className='title'>Contact Us</h3>
                          <div className='input-container'>
                              <input type="text" name='name' className='input' placeholder='UserName' />
                             
                          </div>
                          <div className='input-container'>
                              <input type="email" name='email' className='input' placeholder='Email' />
                              
                          </div>
                          <div className='input-container'>
                              <input type="tel" name='phone' className='input' placeholder='Phone' />
                             
                          </div>
                          <div className='input-container'>
                              <input type="text" name='website' className='input' placeholder='Website' />
                            
                          </div>
                          <div className='input-container textarea'>
                              <textarea name='message' className='input' placeholder='Message' />
                              
                          </div>
                          <input type="submit" value="Submit" className='btn' />
                      </form>
                  </div>
              </div>
          </div>
      </Section>
  )
}


const Section = styled.div`
   background: #00bf76;
  
   .container{
       position: relative;
       width: 100%;
       min-height: 100vh;
       padding: 2rem;
       background-color: #fff;
       overflow: hidden;
       display: flex;
       align-items: center;
       justify-content: center;

   }

   .form{
       width: 100%;
       max-width: 820px;
       height:auto ;
       background-color: #fff;
       border-radius: 10px;
       box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
       /* z-index:1000; */
       overflow: hidden;
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       



   }
   
   .contact-form{
       background-color: #00bf76 ;
       position: relative;
   }
   .circle{
      
       border-radius: 50%;
       background: linear-gradient(135deg, transparent 20%, #fff);
       position: absolute;
   }
   .circle.one{
       width: 130px;
       height: 130px;
       top: 130px;
       right: -40px;
   }
   .circle.two{
       width: 80px;
       height: 80px;
       top: 10px;
       right: 30px;
   }
   
   .contact-form:before{
       content: "";
       position: absolute;
       width: 26px;
       height: 26px;
       background-color: #00bf76 ;
       transform: rotate(45deg);
       top: 50px;
       left: -13px;

   }
   form{
       padding: 2.3rem 2.2rem;
       /* z-index: 10; */
       overflow: hidden;
       position: relative;

   }
   .title{
       color: #fff;
       font-weight: 500;
       font-size: 1.5rem ;
       line-height: 1;
       margin-bottom: 0.7rem;


   }
   .input-container{
       position: relative;
       margin: 1rem 0;
   }
 

   .input{
       width: 100%;
       outline: none;
       border: 2px solid #fafafa;
       background: none;
       padding: 0.6rem 1.2rem;
       color: #fff;
       font-weight: 500;
       font-size: 0.95rem;
       letter-spacing: 0.5px;
       border-radius: 25px;
       transition: 0.3s;


   }

   textarea .input{
       padding: 0.8rem 1.2rem;
       min-height: 150px;
       border-radius: 22px;
       resize: none;
       overflow-y: auto;
   }
   
   .btn{
       padding: 0.6rem 1.3rem;
       background-color: #fff ;
       border: 2px solid #fafafa;
       font-size: 0.95rem;
       color: #00bf76;
       line-height: 1;
       border-radius: 25px;
       outline: none;
       cursor: pointer;
       transition: 0.3s;


   }
   .btn:hover{
       background-color: transparent;
       color: #fff;
   }
   .icon{
       width: 28px;
       margin-right: 0.7rem ;
       margin-bottom: 15px;
   }

   .contact-info{
       padding: 2.3rem 2.2rem ;
       position: relative;

   }
   .contact-info .title{
       color: #00bf76;

   }
   .text{
       color: #333;
       margin: 1.5rem 0 2rem 0;

   }
   .information{
       display: flex;
       color: #555 ;
       margin: 0.7rem 0;
       align-items: center;
       font-size: 0.9rem;
   }

   .social-media{
       padding: 2rem 0 0 0;
   }
   .social-media p{
       color: #333;
   }
   .social-icons{
       display: flex;
       margin-top: 0.5rem;
   }
   .social-icons a{
       width: 35px;
       height: 35px;
       border-radius: 5px;
       background: linear-gradient(45deg, #1abc9c, #149279);
       color: #fff;
       text-align: center;
       line-height: 35px;
       margin-right: 0.5rem;

   }
   .social-icons a:hover{
       transform: scale(1.05);
   }
   

   @media screen and (max-width: 850px) {
       .form{
           grid-template-columns: 1fr;
           margin-top: 25px;
       }

       .contact-info:before{
           bottom:initial;
           top: -75px;
           right: 65px;
           transform: scale(0.95);
       }
       .contact-form:before{
           top: -13px;
           left: initial;
           right: 70px;

       }
       
       
   }
 
   


`

export default Signup