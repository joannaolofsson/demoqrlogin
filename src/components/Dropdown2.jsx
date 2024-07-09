import React, {useState} from "react";
import InstructionListUser from "./InstructionListUser";
import { IoIosArrowDown } from "react-icons/io";  
import { IoIosArrowUp } from "react-icons/io";
import '../LoginOption.css';


const Dropdown2 = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
        <div className="dropContainer" tabIndex="0">
        <div className="dropArrow">
        <button className="btnDropdown" onClick={handleOpen}><p className="font-face-rg">Login with email and password</p></button>
        {open ? <div className="iconDrop"><IoIosArrowUp size={16}/></div> : <div><IoIosArrowDown size={16}/></div>}
        </div>
        
        {open ? (
          <InstructionListUser />
      ) : null}
        
      </div>
    );
  };
  
  export default Dropdown2;