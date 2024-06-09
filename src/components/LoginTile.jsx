import React from 'react'
import { Link } from 'react-router-dom'
import BankIDIcon from '../assets/BankIDLogo.svg';
import { FaArrowRight } from 'react-icons/fa';
import '../LoginOption.css';


const handleClick = () => {
    navigate('/');
  };

function LoginTile() {
  return (
    <>
    <div className="btnModal">
      <div><Link onClick={handleClick} tabIndex="0">
      <div className="bankIdLogo"><img src={BankIDIcon} alt="BankID Logo"/></div>
      <div className="mainText"><p>Mobilt BankID QR-code</p></div>
      <div className="arrowIcon"><FaArrowRight size={20}  /></div></Link></div>
  </div>
</>
  )
}

export default LoginTile;