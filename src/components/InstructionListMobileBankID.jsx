import React from 'react';
import instructions from './instructions';
import '../LoginOption.css';
import '../App.css';

function InstructionListMobileBankID() {    
  return (
    <>
    <ol className="dropList">
        {instructions.map((instruction, index) => (
            <li key={index} className="font-face-rg">
                {instruction.text1}
            </li>
        ))}
    </ol>
    </>
  )
}

export default InstructionListMobileBankID;