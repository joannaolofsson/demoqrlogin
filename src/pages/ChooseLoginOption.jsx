import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginwithQRCode from '../components/LoginwithQRCode';
import Dropdown from '../components/Dropdown';
import Dropdown2 from '../components/Dropdown2';
import BankIDIcon from '../assets/BankIDLogo.svg';
import UserLogo from '../assets/UserIcon.svg';
import { FaArrowRight } from "react-icons/fa";
import '../LoginOption.css';
import '../App.css';

function ChooseLoginOption() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flexContainer">
        <div className="flexContent">
          <div className="cardTextSpaceOver">
            <p>My personal</p>
            <h3>Login</h3>
          </div>
          <div className="cardTextSpaceInline2">
            <div className="spaceHeading">
            <h4 >Choose your preferred login:</h4>
            </div>

          <button className="btnModal" onClick={handleModalOpen}>
            <div><img src={BankIDIcon} alt="Click on card to open QR code" className='bankIDIcon'/></div>
            <div className="mainText"><p>BankID med QR-kod</p></div>
            <div className="bankArrowIcon"><FaArrowRight size={20}/></div>
          </button>

          <LoginwithQRCode isOpen={isModalOpen} onClose={handleModalClose} />
          <Dropdown />
          <div className="btnPass">
              <div><img src={UserLogo} alt="Disabled card for login with email and password" className='userIcon'/></div>
              <div className="mainText"><p>Disabled</p></div>
              <div className="userArrowIcon"><FaArrowRight size={20} /></div>
          </div>
          <Dropdown2 />
          <div className="cancel-wrapper" >
              <Link className="cancelP" to="/" tabIndex="0">
                <p>Cancel?</p>
              </Link>
            </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ChooseLoginOption;
