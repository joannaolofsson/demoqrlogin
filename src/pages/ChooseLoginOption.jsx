import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginwithQRCode from '../components/LoginwithQRCode';
import Dropdown from '../components/Dropdown';
import Dropdown2 from '../components/Dropdown2';
import BankIDIcon from '../assets/BankIDLogo.svg';
import UserLogo from '../assets/UserIcon.svg';
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../components/Navbar';

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
    <Navbar />
      <div className="flexContainer">
        <div className="flexContent">
          <div className="optionHeading">
            <p>My personal</p>
            <h3>Login</h3>
          </div>
          <div className="optionHeadline">
            <h4>Choose your preferred login:</h4>
          </div>
          <button className="btnModal" onClick={handleModalOpen}>
            <div className="BankID-wrapper"><img src={BankIDIcon} alt="Klicka på BankID iconen"/></div>
            <div className="Text-wrapper"><p className="mainText">BankID med QR-kod</p></div>
            <div className="arrowIcon"><FaArrowRight size={20}/></div>
          </button>

          <LoginwithQRCode isOpen={isModalOpen} onClose={handleModalClose} />
          <Dropdown />
          <div className="btnPass">
              <div className="User-wrapper"><img src={UserLogo} alt="Ikon logga in med email och lösenord ej klickbar"/></div>
              <div className="Text-wrapper"><p>Disabled</p></div>
              <div className="arrowIcon"><FaArrowRight size={20} /></div>
          </div>
          <Dropdown2 />
          <div className="cancel-wrapper" >
              <Link className="optionCancel" to="/" tabIndex="0">
                <p>Cancel?</p>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default ChooseLoginOption;
