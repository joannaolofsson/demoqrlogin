import '../App.css';
import '../index.css';
import React, {useState} from 'react';
import HomeContent from '../components/HomeContent';
import { DrawerMobile } from '../components/MobileDrawer';
import ButtonDrawer from '../components/ButtonDrawer';
import { Link } from 'react-router-dom';

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
        <nav>
          <Link to="/val" className="btnLoginDesktop">Login</Link>
        <div className="startPageMobile">
          <HomeContent />
         
          <div className="sticky-tooltip-container">
          
          <ButtonDrawer onClick={toggleDrawer} />
          </div>
          <DrawerMobile isOpen={isOpen} />
        </div>
        </nav>
    </>
    )
  }

      export default Home



