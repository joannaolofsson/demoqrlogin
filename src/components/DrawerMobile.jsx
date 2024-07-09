import React from 'react';
import BankIDIcon from '../assets/BankIDLogo.svg';
import UserLogo from '../assets/UserIcon.svg';
import { FaArrowRight } from "react-icons/fa";



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
    <div className="drawerWrapper">
      <div className="closeText" onClick={() => navigateTo('*')}>Close X</div>
      <div className="flexHeading">
            <p>My personal</p>
            <h3>Login</h3>

      <div className="spaceHeading">
      <h4>Choose you login:</h4></div>
      </div> 

          <div>
            <div className="cardMobileBankID" onClick={() => navigateTo('/')}>
            <img src={BankIDIcon} alt="BankIDs logotype to login with mobile BankID" />
              <p>Mobile BankID</p>
              <div>
              <div className="arrowIcon"><FaArrowRight size={20}/></div>
              </div>
            </div>
          </div>
          <div>
            <div className="cardUserLogin" onClick={() => navigateTo('/')}>
            <img src={UserLogo} alt="Icon for login with email and password" />
              <p>Email & password</p>
              <div>
              <div className="arrowIcon"><FaArrowRight size={20}/></div>
              </div>
            </div>
          </div>
              </div>
  );
};