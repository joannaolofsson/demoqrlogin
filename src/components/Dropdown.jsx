import React, {useState} from "react";
import InstructionListMobileBankID from "./InstructionListMobileBankID";
import { IoIosArrowDown } from "react-icons/io";  
import { IoIosArrowUp } from "react-icons/io";
import '../LoginOption.css';

const Dropdown = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropContainer" tabIndex="0">
        <div className="dropArrow">
        <button className="btnDropdown" onClick={handleOpen}><p className="font-face-rg">How to login with QR code</p></button>
        {open ? <div  className="iconDrop"><IoIosArrowUp size={16}/></div> : <div><IoIosArrowDown size={16}/></div>}
        </div>
        
        {open ? (
          <InstructionListMobileBankID />
      ) : null}
        
      </div>
    );
  };
  
  export default Dropdown;