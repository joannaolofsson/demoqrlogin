import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
import '../index.css';
import NewModal from '../components/NewModal';
import Olist from '../components/Olist';
import { FaArrowRight } from "react-icons/fa";
import IconUser from '../assets/User.png';

const Val = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/login');
    };

  return (
    <>
      <div className="Container">
        <div className="flexContainer">
            <div className="loginHead">
                <p>My personal</p>
                <h4>Login</h4>
            </div>
            <div className="flexHeading"><h2>Välj hur du vill logga in företag</h2></div>
            <div className="cardcontainer">
                <NewModal />
            </div>
            <div className="loginPageUser">
                <button className="btnUser" onClick={handleClick}>
                    <div className="imgContainer">
                    <img src={IconUser} alt="User" className="userIcon" /></div>
                    <div className="textContainer">
                        <p className="mainText">Log in with Email</p>
                        <p className="subText">& Password</p>
                     </div>
                <FaArrowRight size={20} className="arrowIcon" />
            </button>
            </div>


            <div>
            <h5 className="flexHeading">
                Så här loggar du in med QR kod:
              </h5>
              <div className="qrInstruction">
                  <Olist />
                </div>
                <div>
              <Link to="/" className="helpText">Avbryt inloggningen</Link>
            </div>
            </div>
              </div>
        </div>
  </>
  )
}

export default Val;