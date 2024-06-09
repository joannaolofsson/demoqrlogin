import React from 'react';
import '../App.css';
import '../index.css';
import '../Start.css';
import { Link } from 'react-router-dom';
import HeartIcon from '../assets/heart.svg';
import { LuCookie } from "react-icons/lu";
import { GrCircleInformation } from "react-icons/gr";

function HomeContent() {
  return (
    <>
      
        <Link to="/ChooseLoginOption" className="btnLoginDesktop">Login</Link>
        <nav>
        <div className="startHeroDesktop">
          <img src={HeartIcon} alt="login" />
          <h1>I love login</h1>
        </div>
        </nav>
      <div className="container">
        <div className="cardList">
          <div className="cardHelp" tabIndex="0">
            <Link to="#" className="card-action"  >
              <div className="cardHelpContent">
                <div className="cardBannerHelp">
                  <h2>Help</h2>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className="cardHelpText">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                    maiores quas incidunt, odio, doloremque explicabo necessitatibus 
                    quasi, eaque veniam minima eius quos error. Deleniti, minus?</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="cardImage1" tabIndex="0">CardImage1</div>
          <div className="cardImage2" tabIndex="0">CardImage2</div>

          <div className="cardBankID" tabIndex="0">
            <Link to="#" className="card-action" >
              <div className="cardBankIDContent">
                <div className="cardBIDText">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                    maiores quas incidunt, odio, doloremque explicabo necessitatibus?</p>
                </div>
                <div className="cardBannerBID">
                  <GrCircleInformation size={32} />
                  <h2>BankID</h2>
                </div>
              </div>
            </Link>
          </div>

          <div className="cardCookie" tabIndex="0">
            <Link to="#" className="card-action" >
              <div className="cardCookieContent">
                <div className="cardBannerCookie">
                  <LuCookie size={32} />
                  <h2>Cookie</h2>
                </div>
                <div className="cardCookieText">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                    maiores quas incidunt, odio, doloremque explicabo necessitatibus 
                    quasi, eaque veniam minima eius quos error. Deleniti, minus?</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;