import React from 'react';
import BankIDIcon from '../BankIDLogo.svg';
import ProfileImg from '../assets/IconProfile.png';


export const MobileDrawer = ({ isOpen }) => (
  <div className={`Drawer__Container ${isOpen && "Drawer__Container--isOpen"}`}>
    <DrawerContents />
  </div>
);

export const DrawerContents = () => {
  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="flexContainer">
      <h3 className="flexHeading">Välj hur du vill logga in - företag</h3>
      <div className="loginOptions">
        <ul>
          <li className="mobiltBankID">
            <div className="cardBankID" onClick={() => navigateTo('/MobileWaiting')}>
              <h5 className="mobiltQr">Mobilt BankID</h5>
              <img src={BankIDIcon} alt="BankIDs icon" />
            </div>
          </li>
          <li className="user">
            <div className="cardUser" onClick={() => navigateTo('/UserLoginPage')}>
              <h5 className="userLink">Användarnamn</h5>
              <img src={ProfileImg} alt="Icon Profil" />
            </div>
          </li>
          <li> <div className="helpText" onClick={() => navigateTo('*')}>Stäng X</div></li>
        </ul>
      </div>
      </div>
  );
};