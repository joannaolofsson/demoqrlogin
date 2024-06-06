import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { useCookies } from 'react-cookie';
import LoadingMobile from './pages/LoadingMobile';
import UserLoginPage from './pages/UserLoginPage';
import { Link } from 'react-router-dom';
import Val from './pages/Val';
import Misslyckades from './pages/Misslyckades';

function App() {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [consented, setConsented] = useState(cookies.cookieConsent === 'true');

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem('consented') === 'true';
    setConsented(hasConsented);
  }, []);

  // Handle cookie consent
  const handleConsent = () => {
    setCookie('cookieConsent', 'true', { path: '/', maxAge: 365 * 24 * 60 * 60 });
    localStorage.setItem('consented', 'true');
    setConsented(true);
  };

  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    window.dispatchEvent(new Event('popstate'));
  }; 

  return (
    <>
      <div>
        {!consented && (
          <div className="cookie-banner">
            <div className="cookieContent">
              <div className="cookieText">
                <h4>A better user experience with cookies</h4>{' '}
                <p>We use cookies to provide our system with  better function and security for you. We also use cookies to collect 
                  information of how our users works in our system. This will help us, create a more efficient system for you.
                </p>
              </div>
              <div className="cookieButtons">
                <button className="BtnAgree" onClick={handleConsent}>Agree to all</button>
                <button className="BtnNecess" onClick={handleConsent}>Only necessary</button>
              </div>
            </div>
            <div className="cookiePolicyLinkArea"><Link className="cookiePolicyLink"><p>Read more about our cookie policy</p></Link>
            </div>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/userLoginPage" element={<UserLoginPage/>} />
        <Route path="/val" element={<Val/>} />
        <Route path="/LoadingMobile" element={<LoadingMobile />} />
        <Route path="/misslyckades" element={<Misslyckades />} />

        <Route path="/" element={<Home />} />
         {/* Default Route */}
        <Route path="*" element={<Navigate to="/" />} />  
      </Routes>
    </>
  );
}

export default App;