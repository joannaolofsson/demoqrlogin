import React from 'react';
import '../App.css';
import '../index.css';
import '../Start.css';
import { Link } from 'react-router-dom';
import { LuCookie } from "react-icons/lu";
import { GrCircleInformation } from "react-icons/gr";
import windTurbineImg from '../assets/windTurbine.jpg';
import wavePowerImg from '../assets/wavePower.jpg';

function HomeContent() {
  return (
    <>

   

      <div className="container">
        <div className="cardList">
        <Link to="/ChooseLoginOption" className="btnLoginDesktop" tabIndex="0"><p className="btnLoginText">Login</p></Link>
          <div className="cardHelp" tabIndex="0">
            <Link to="#" className="card-action"  >
              <div className="cardHelpContent">
                <div className="cardBannerHelp">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className="cardHelpText">
                <div className='cardTextSpaceOver'>
                <h3>Help</h3></div>
                <div className="cardTextSpaceInline">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                    maiores quas incidunt, odio, doloremque explicabo necessitatibus 
                    quasi, eaque veniam minima eius quos error. Deleniti, minus?</p>
                    </div>
                </div>
              </div>
            </Link>
          </div>

          <img src={windTurbineImg} className="cardImage1" tabIndex="0" />


          <img src={wavePowerImg} className="cardImage2" tabIndex="0" />


          <div className="cardBankID" tabIndex="0">
            <Link to="#" className="card-action" >
              <div className="cardBankIDContent">
                <div className="cardBannerBID"><GrCircleInformation size={32} /></div>
                <div className="cardBIDText">
                <h3>BankID</h3></div>
                  <div className="cardTextSpaceInline"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                    maiores quas incidunt, odio, doloremque explicabo necessitatibus?</p></div>
              </div>
            </Link>
          </div>

          <div className="cardCookie" tabIndex="0">
            <Link to="#" className="card-action" >
            <div className="cardBannerCookie"><LuCookie size={32} /></div>
              <div className="cardCookieContent">
                  <div className="cardCookieText"><h3 className="font-face-bd">Cookie</h3></div>
            </div>
            <div>
            <div className="cardTextSpaceInline"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
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