
import React, {useState} from "react";
import '../App.css';

const ButtonDrawer = ({ onClick }) => {
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
    <div className="sticky-tooltip-button" aria-describedby="sticky-tooltip" tabIndex="0" onClick={handleClick}>
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ):(
        <>
      <p>Login</p>
      <span id="sticky-tooltip" className="tooltip-text">This is a sticky button tooltip</span>
        </>
      )}
    </div>
  );
}

export default ButtonDrawer;