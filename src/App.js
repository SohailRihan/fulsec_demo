import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sidebar from "./components/Sidebar";
import Home from "./pages"
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
      <CookieConsent 
      debug={true}
      location ="bottom"
      style={{background: '#000', textAlign: "center"}}
      buttonStyle={{ color : '#000', background: '#fff', fontSize:'16px', borderRadius: '20px', }}
      
      >
      This site uses cookies. See our <a href="/privacy">privacy policy</a>  for more.
      </CookieConsent>
    </Router>
   
    
    
  );
}

export default App;
