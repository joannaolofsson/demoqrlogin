import React, { useState } from 'react';
import '../App.css'
import '../Start.css'
import { DrawerMobile } from '../components/DrawerMobile';
import HomeContent from '../components/HomeContent';

const DrawerButton = ({ onClick }) => (
  <div className="btnDrawer" onClick={onClick}>
    <p>Login</p>
  </div>
);

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
        <div className="BelowHeroMobileContainer">
          <DrawerButton onClick={toggleDrawer} />
          <DrawerMobile isOpen={isOpen} />
          <HomeContent />
        </div>
    </>
    )
  }

      export default Home;


