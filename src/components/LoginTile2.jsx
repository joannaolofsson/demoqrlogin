import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../LoginOption.css';
import IconUser from '../assets/UserIcon.svg'
import { Link } from 'react-router-dom';

const handleClick = () => {
    navigate('/');
  };

function LoginTile2() {
  return (
    <>

      <div className="btnPass">
        <div><Link onClick={handleClick}></Link></div>
        <div className="userIcon"><img src={IconUser} alt="icon symbol for user"/></div>
        <div className="userText"><p >Email & Password</p></div>
        <div className="arrowIcon"><FaArrowRight size={20}  /></div>
      </div>
    </>
  )
}

export default LoginTile2;