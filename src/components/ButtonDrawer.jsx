import React, {useState} from "react";
import '../App.css';
import '../Start.css';

const ButtonDrawer = ({ onClick, buttonRef }) => {
    const [isLoading, setIsLoading] = useState(false);
  
    const handleClick = async () => {
      setIsLoading(true);
      try {
        await onClick();
      } finally {
        setIsLoading();
      }
    };

    return(
      <div className="sticky-tooltip-button-wrapper">
        <button 
          className="sticky-tooltip-button" 
          aria-describedby="sticky-tooltip" 
          tabIndex="0" 
          ref={buttonRef}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="spinner">Loading...</div>
          ) : (
            <>
              <p>Login</p>
              <span id="sticky-tooltip" className="tooltip-text">Click the login button</span>
            </>
          )}
        </button>
    </div>
  );
};

export default ButtonDrawer;