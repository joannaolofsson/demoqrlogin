import React from 'react'
import { Link } from 'react-router-dom'
import '../App';

function Misslyckades() {
  return (
    <>
    <div className="flexContainer">
      <div className="flexArea">
        <h4 className="flexHeading">Något gick fel, inloggningen misslyckades</h4>
          <Link to="/Val"><p className="helpText">Återgå till inloggningen</p></Link>
          <Link to="/"><p className="helpText">Avbryt inloggningen</p></Link>
      </div>
    </div>
    </>
  )
}

export default Misslyckades;