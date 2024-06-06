import React from 'react'
import ProfileImage from '../assets/IconProfile.png';
import { useNavigate } from 'react-router-dom';



function CardButtonBankIDLogin() {
    const navigate = useNavigate(); // Hook to handle navigation
  return (
    <>
    <div>
        <button className="cardBankIDLoginMobile" onClick={() => navigate('/LoadingMobile')}>
            <h5 className="mobiltQr">Mobilt BankID</h5>
            <img src={ProfileImage} alt="BankIDs icon" />
        </button>
    </div>
  </>
  )
}

export default CardButtonBankIDLogin;