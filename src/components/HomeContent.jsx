import React from 'react'
import '../App.css'
import '../index.css'
import { Link } from 'react-router-dom';
import FossilFreedom from '../assets/LovesFossilFreedom.svg';
import { LuCookie } from "react-icons/lu";
import { GrCircleInformation } from "react-icons/gr";



function HomeContent() {
  return (
    <>
        <div className="container">
            <div className="startHeroDesktop">
                <img src={FossilFreedom} alt="Vattenfall Loves Fossil Freedom" />
                <h2>Me loves Login</h2>
            </div>
        </div>

        <div className="container">
            <div className="cardList">
                <div className="cardHelp">
                    <Link to="#" className="card-action">
                        <div className="cardHelpContent">
                            <div className="cardBannerHelp">
                            <h3>Help</h3>
                             <p>1</p>
                                <p>2</p>
                                <p>3</p>
                            </div>
                            <div className="cardHelpText"><p>orem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                                maiores quas incidunt, odio, doloremque explicabo necessitatibus 
                                quasi, eaque veniam minima eius quos error. Deleniti, minus?</p>
                            </div>
                        </div>
                    </Link>
                </div>
     
                
                <div className="cardImage1">CardImage1</div>
                <div className="cardImage2">CardImage2</div>

                <div className="cardBankID">
                    <Link to="#" className="card-action">
                        <div className="cardBankIDContent">
                            <div className="cardBIDText"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
                                maiores quas incidunt, odio, doloremque explicabo necessitatibus?</p>
                            </div>
                            <div className="cardBannerBID">
                            <GrCircleInformation />
                                <h3>BankID</h3>
                                
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="cardCookie">
                    <Link to="#" className="card-action">
                        <div className="cardCookieContent">
                            <div className="cardBannerCookie">
                            <LuCookie />
                            <h3>Cookie</h3>
                            
                            </div>
                            <div className="cardCookieText"><p>orem ipsum dolor sit amet consectetur adipisicing elit. Corrupti 
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
