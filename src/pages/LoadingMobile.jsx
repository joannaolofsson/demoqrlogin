import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../index.css'


function MobileWaiting() {
  return (
    <>
    <div className="flexContainer">
      <div className="flexArea">
        <h4 className="flexHeading">2 scenarios</h4>
        <p className="scenarios">Denna sida innehåller två scenarion, ett som visar en framgångsrik inloggning
        och ett som visar en inloggning som misslyckats på grund av felaktig inloggning
        i mobiltelefonen. Av prioriteringsskäl har jag valt att undvika exempelvis scenariot
        där det tar användaren för lång tid att logga in. 
        </p>
      </div>
      <div className="scenarios">
      <Link to="/dashboard" className="lyckadInloggning">Framgång</Link>
      <Link to="/Misslyckades" className="misslyckadInloggning">Misslyckad</Link>
      </div>
    </div>
    </>
  )
}

export default MobileWaiting;