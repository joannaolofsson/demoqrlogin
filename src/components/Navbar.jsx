import React from 'react'
import HeartIcon from '../assets/heart.svg';
import '../App.css';
import '../index.css';
import '../Start.css';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div to="/" className="startHeroDesktop">
                <img className="heartIcon" src={HeartIcon} alt="Picture of a heart, not to click on" />
                <h1>I love login</h1>

            </div>
        </nav>
    </>
  )
}

export default Navbar;