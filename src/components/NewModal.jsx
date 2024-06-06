import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import QrImage from '../assets/QrCode.png';
import BankIDTab from '../assets/BankID.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai';

function NewModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    openModal(); 
  };

  return (
    <div className="loginPageUser">
      <button className="btnModal" onClick={handleClick}>
        <div className="imgContainer">
          <img src={BankIDTab} alt="BankID Logo" className="bankIdLogo" />
        </div>
        <div className="textContainer">
          <p className="mainText">Log in with QR-code</p>
          <p className="subText">Mobile BankID</p>
        </div>
        <FaArrowRight size={20} className="arrowIcon" />
      </button>
      

      {isOpen && (
        <div className="modal-overlay">
          <div id="modal-one" className="modal">
            <div className="modal-content">
              <div className="qrContainer">
                <div className="qrCodeArea">
                  <img
                    src={QrImage}
                    id="theqrcode"
                    className="theqrcode"
                    alt="Qr-kod som skall scannas med appen BankID."
                  />
                </div>
                <div className="modal-content2">
                  <div className="quickInstruction">
                    <ul>
                      <li>Öppna appen för BankID.</li>
                      <li>Tryck på QR-symbolen i appen för BankID.</li>
                    </ul>
                  </div>
                  <span className="close" onClick={closeModal}>
                    Byt inloggningssätt
                  </span>
                </div>
                <Link to="/dashboard">Lyckad inloggning</Link>
                <Link to="/Misslyckades">Misslyckad inloggning</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );}

export default NewModal;