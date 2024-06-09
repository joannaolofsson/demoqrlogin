import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import '../index.css';
import '../LoginOption.css';
import Dropdown from '../components/Dropdown';
import Dropdown2 from '../components/Dropdown2';
import LoginTile from '../components/LoginTile2';
import LoginTile2 from '../components/LoginTile';

const handleClick = () => {
  navigate('/');
};


function LoginOptionDesktop() {
  return (
      <>
      <div className="flexcontainer">
        <div className="flexContent">
          <div className="optionHeading">
            <p>My personal</p>
            <h3>Login</h3>
            
          </div>
          <div className="optionHeadline"><h4>Choose your prefered login:</h4></div>
            <LoginTile />
            <Dropdown />
            <LoginTile2 />
            <Dropdown2 />
            <div className="cancel-wrapper">
              <div className="optionStyle" tabIndex="0">
                <Link className="optionCancel" to="/"><p>Cancel?</p></Link>
            </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default LoginOptionDesktop;

