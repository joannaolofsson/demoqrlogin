import React from 'react';
import instructions from './instructions';
import '../LoginOption.css';

function InstructionListMobileBankID() {    
  return (
    <>
    <ol className="dropList">
        {instructions.map((instruction, index) => (
            <li key={index}>
                {instruction.text1}
            </li>
        ))}
    </ol>
    </>
  )
}

export default InstructionListMobileBankID;