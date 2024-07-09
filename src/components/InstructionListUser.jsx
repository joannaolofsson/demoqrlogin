import React from 'react';
import instructions from './instructions';
import '../LoginOption.css';
import '../App.css';

function InstructionListUser() {    
  return (
    <>
    <ol className="dropList">
        {instructions.map((instruction, index) => (
            <li key={index} className="font-face-rg">
                {instruction.text2}
            </li>
        ))}
    </ol>
    </>
  )
}

export default InstructionListUser;