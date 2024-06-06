import React from 'react'
import ProfileImage from '../assets/IconProfile.png';
import { useNavigate } from 'react-router-dom';





function CardButtonUserLogin() {
  const navigate = useNavigate(); // Hook to handle navigation
  return (
    <>
    <div>
    <button className="cardUser" onClick={() => navigate('/UserLoginPage')}>
        <h5 className="userLink">Användarnamn</h5>
        <div className="cardIconUser">
        <img src={ProfileImage} alt="Icon Profil" />
        </div>
    </button>
    </div>
  </>
  )
}

export default CardButtonUserLogin;