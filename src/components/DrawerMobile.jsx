import React from 'react';
import BankIDIcon from '../assets/BankIDLogo.svg';
import UserLogo from '../assets/UserIcon.svg';


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
              <img src={BankIDIcon} alt="BankIDs logotyp att klicka på" />
            </div>
          </div>
          <div className="user">
            <div className="cardUser" onClick={() => navigateTo('/')}>
              <h5 className="userLink">Email & password</h5>
              <img src={UserLogo} alt="Ikon för att logga in med email & lösenord" />
            </div>
          </div>
              </div>
  );
};