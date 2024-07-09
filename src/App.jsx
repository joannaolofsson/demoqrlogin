import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import LoginOptionDesktop from './pages/ChooseLoginOption';
import Navbar from './components/Navbar';


function App() {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [consented, setConsented] = useState(cookies.cookieConsent === 'true');

  useEffect(() => {
    const hasConsented = localStorage.getItem('consented') === 'true';
    setConsented(hasConsented);
  }, []);

  const handleConsent = () => {
    setCookie('cookieConsent', 'true', { path: '/', maxAge: 365 * 24 * 60 * 60 });
    localStorage.setItem('consented', 'true');
    setConsented(true);

    const nextElement = document.querySelector('[tabindex="0"], a, button, input, textarea, select');
    if (nextElement) {
      nextElement.focus();
    }
  };

  return (
    <>
    <Navbar />
      <div className="container">
        <div className="flexContainer">
        {!consented && (
          <div className="cookie-banner" aria-live="polite">
              <div className="cookieText">
                <h4>A better user experience with cookies</h4>{' '}
                <p>We use cookies to provide our system with better function and security for you. We also use cookies to collect 
                  information of how our users works in our system. This will help us, create a more efficient system for you.
                </p>
              </div>
              <div className="cookieButtons">
                <button className="BtnAgree" onClick={handleConsent}>Agree to all</button>
                <button className="BtnNecess" onClick={handleConsent}>Only necessary</button>
              </div>
   
            <div className="cookiePolicyLinkArea">
              <Link to="/cookie-policy" className="cookiePolicyLink">
                <p className="cookiePolicyP">Read more about our cookie policy</p>
              </Link>
            </div>
          </div>
        )}
      </div>
      </div>

      <Routes>
        <Route path="/ChooseLoginOption" element={<LoginOptionDesktop />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;