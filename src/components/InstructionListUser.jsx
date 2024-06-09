import React from 'react';
import instructions from './instructions';

function InstructionListUser() {    
  return (
    <>
    <ol className="dropList">
        {instructions.map((instruction, index) => (
            <li key={index}>
                {instruction.text2}
            </li>
        ))}
    </ol>
    </>
  )
}

export default InstructionListUser;