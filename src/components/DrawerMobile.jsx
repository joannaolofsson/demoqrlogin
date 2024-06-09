import React from 'react';
import BankIDIcon from '../assets/BankIDLogo.svg';
import UserLogo from '../assets/UserIcon.svg';
import { Link } from 'react-router-dom';


export const DrawerMobile = ({ isOpen }) => (
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
      <div className="closeText" onClick={() => navigateTo('*')}>Close X</div>
      <div className="flexHeading">
            <p>My personal</p>
            <h3>Login</h3>
 
      <h3>Choose you login:</h3>
      </div>
          <div className="mobiltBankID">
            <div className="cardBankID" onClick={() => navigateTo('/')}>
              <h5 className="mobiltQr">Mobile BankID</h5>
              <img src={BankIDIcon} alt="BankIDs icon" />
            </div>
          </div>
          <div className="user">
            <div className="cardUser" onClick={() => navigateTo('/')}>
              <h5 className="userLink">Email & password</h5>
              <img src={UserLogo} alt="Icon Profil" />
            </div>
          </div>
              </div>
  );
};