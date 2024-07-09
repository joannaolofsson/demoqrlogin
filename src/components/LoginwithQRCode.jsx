import React, { useState, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import QrImage from '../assets/QrMini.png';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Qr.css';
import '../LoginOption.css';

function LoginwithQRCode({ isOpen, onClose }) {
  const [reloadCount, setReloadCount] = useState(0);
  const [qrCode, setQrCode] = useState(QrImage);
  const maxReloads = 3;

  const openModal = () => {
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
    onClose();

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
      timer = setInterval(reloadQrCode, 30000); 
      openModal(); 
    }
    return () => clearInterval(timer);
  }, [isOpen, reloadCount]);

  useEffect(() => {
    if (isOpen) {

      const focusableElement = document.querySelector('.modal .change-wrapper');
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div className="modal-overlay" id="modal-overlay" aria-hidden={!isOpen}>
        <div id="modal-one" className="modal">
          <div className="modal-content">
            <div className="qrPageContainer">
              <div className="qr-wrapper">
                <img
                  src={qrCode}
                  id="theqrcode"
                  className="theqrcode"
                  alt="QR code to scan with the BankID app"
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
                      <div>Open BankID app in your mobile</div>
                      <div>Tap QR-symbolen and follow instructions</div>
                  </div>
                </div>
                <div className="change-wrapper" >
                  <Link className="changeLoginAlt"  onClick={closeModal}><p className="changeP" tabIndex="0">change login option</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}


export default LoginwithQRCode;