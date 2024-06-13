import React from 'react'
import HeartIcon from '../assets/heart.svg';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div to="/" className="startHeroDesktop">
                <img src={HeartIcon} alt="Bild på ett hjärta inte klickbar" />
                <h1>I love login</h1>
            </div>
        </nav>
    </>
  )
}

export default Navbar;