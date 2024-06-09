import React, { useState, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import QrImage from '../assets/QrCode.png';
import BankIDIcon from '../assets/BankIDLogo.svg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../App.css'; 
import '../Qr.css';
import '../LoginOption.css';

function ModalDesktop() {
  const [isOpen, setIsOpen] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);
  const [qrCode, setQrCode] = useState(QrImage);
  const maxReloads = 3;

  const openModal = () => {
    setIsOpen(true);
    setReloadCount(0); // Reset the reload count when the modal opens

    const mainContent = document.getElementById('main-content');
    const modalOverlay = document.getElementById('modal-overlay');

    if (mainContent) {
      mainContent.setAttribute('aria-hidden', 'true');
    }
    if (modalOverlay) {
      modalOverlay.removeAttribute('aria-hidden');
    }
  };

  const closeModal = () => {
    setIsOpen(false);

    const mainContent = document.getElementById('main-content');
    const modalOverlay = document.getElementById('modal-overlay');

    if (mainContent) {
      mainContent.removeAttribute('aria-hidden');
    }
    if (modalOverlay) {
      modalOverlay.setAttribute('aria-hidden', 'true');
    }
  };

  const reloadQrCode = () => {
    if (reloadCount < maxReloads) {
      setQrCode(`${QrImage}?t=${Date.now()}`);
      setReloadCount(reloadCount + 1);
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setInterval(reloadQrCode, 30000); // Reload QR code every 30 seconds
    }
    return () => clearInterval(timer);
  }, [isOpen, reloadCount]);

  useEffect(() => {
    if (isOpen) {
      // Set focus to the first focusable element in the modal
      const focusableElement = document.querySelector('.modal .change-wrapper');
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }, [isOpen]);

  const handleClick = () => {
    openModal();
  };

  return (
    <div id="main-content">
      <button className="btnModal" onClick={handleClick} tabIndex="0">
        <div className="qrImgContainer">
          <img src={BankIDIcon} alt="BankID Logo" className="bankIdLogo" />
        </div>
        <div className="contentContainer">
          <div><p className="mainText">Mobilt BankID QR-code</p></div>
          <div><FaArrowRight size={20} className="arrowIcon" /></div>      
        </div>     
      </button>

      {isOpen && (
        <FocusTrap>
          <div className="modal-overlay" id="modal-overlay" aria-hidden="true">
            <div id="modal-one" className="modal">
              <div className="modal-content">
                <div className="qrPageContainer">
                  <div className="qr-wrapper">
                    <img
                      src={qrCode}
                      id="theqrcode"
                      className="theqrcode"
                      alt="Qr-code to scan with your BankID app."
                    />
                  </div>

                  <div className="infoContainer">
                    <div className="reloadArea">
                      <div className="reloadInfo">
                        <div className="reloadCount"><p>Reloads: {reloadCount}</p></div>
                        <div className="reloadMax"><p>Reloads left: {maxReloads - reloadCount}</p></div>
                      </div>
                    </div>
                    <div className="instruction-wrapper">
                      <div className="qrInstruction">
                        <ul>
                          <li>Open BankID app in your mobile</li>
                          <li>Tap QR-symbolen and follow instructions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="change-wrapper" tabIndex="0">
                      <Link className="changeLoginAlt" onClick={closeModal} >change login option</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}
    </div>
  );
}

export default ModalDesktop;
