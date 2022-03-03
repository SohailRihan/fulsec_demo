import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Company from '../components/Company.jsx'
import Achievements from '../components/Achievements'
import Product from '../components/Product'
import Services from '../components/Services'
import Signup from '../components/Signup'
import Resources from '../components/Resources'
import Footer from '../components/Footer'
import Partners from '../components/Partners'






const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (

    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <HeroSection />
        <Company />
        <Achievements />
        <Product />
        <Services />
        <Signup />
        <Resources />
        <Partners />
        
        <Footer />
        
       
      
    </>
      
  )
}

export default Home