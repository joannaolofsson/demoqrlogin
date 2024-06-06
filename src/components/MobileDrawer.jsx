import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardButtonUserLogin from './CardButtonUserLogin';
import CardButtonBankIDLogin from './CardButtonBankIDLogin';

export const DrawerContents = () => {
    const navigateTo = (path) => {
      window.history.pushState(null, null, path);
      window.dispatchEvent(new Event('popstate'));
    }
  }

export const DrawerMobile = ({ isOpen }) => {
    const navigate = useNavigate(); // useNavigate hook
  
    return (
      <div className={`Drawer__Container ${isOpen && "Drawer__Container--isOpen"}`}>
        <DrawerContents />
            <div className="helpText" onClick={() => navigate('*')}>Stäng X</div>
                <div className="flexContainer">
                <p>Corporate</p>
                <h4 className="flexHeading">Välj hur du vill logga in - företag</h4>
                    <div className="loginOptions">
                        <div className="bankIDLoginMobile">
                        <CardButtonBankIDLogin />
                        </div>
                        <div className="user">
                        <CardButtonUserLogin />
                    </div>
                </div>
            </div>
        </div>
    );
  };