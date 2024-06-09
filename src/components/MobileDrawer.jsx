import React from 'react';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import LoginTile from './LoginTile';
import LoginTile2 from './LoginTile2';
import { Link } from 'react-router-dom';

    const MobileDrawer = ({ isOpen, onClose }) => {
      return (
        <div className={`Drawer__Container ${isOpen ? 'Drawer__Container--isOpen' : ''}`}>
          <div className="DrawerContainer">
          <div className="Drawer__Header">
            <button onClick={onClose} className="Drawer__CloseButton">Close</button>
          </div>
          <div className="optionHeading">
            <p>Corporate</p>
            <p>myLogin</p>
            <h4 className="optionHeadline">Choose your perfered login</h4>
              <LoginTile />
              <Dropdown />
              <LoginTile2/>
              <Dropdown2 />
              <div>
              <Link className="optionCancel" to="/"><p>Cancel?</p></Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default MobileDrawer;