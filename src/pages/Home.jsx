import '../Start.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeContent from '../components/HomeContent';
import ButtonDrawer from '../components/ButtonDrawer';
import MobileDrawer from '../components/MobileDrawer';

function Home({ consented }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (consented && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [consented]);

  return (
    <>
      <nav>
        <Link to="/ChooseLoginOption" className="btnLoginDesktop" id="tab-1" tabIndex="0">Login</Link>
        <ButtonDrawer onClick={toggleDrawer} buttonRef={buttonRef} />
        <HomeContent />
        <div>
          <MobileDrawer isOpen={isOpen} onClose={toggleDrawer} />
        </div>
      </nav>
    </>
  );
}

export default Home;