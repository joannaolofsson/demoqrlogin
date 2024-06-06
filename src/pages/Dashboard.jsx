import React from 'react'
import { FaCheck } from "react-icons/fa";
import Plot from '../components/Plot';
import Back from '../components/Back';


function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="dashboardHeading">
        <div className="gridWelcome">
        <Back />
        </div>
      </div>
      <div className="challenge1">
      <p>Vecka 17</p>
        <h1 className="chip1">3 maj</h1>
       <ul>
        <li>Aktivitet 1</li>
        <li>Aktivitet 2</li>
        <li>Aktivitet 3</li>
       </ul>
       </div>
      <div className="challenge2">
        <div className="square2">
          <div>
      <p>Månadens mål är uppnått</p>
        <h1>60K</h1>
        </div>
        <div className="circle"><FaCheck /></div>
        <p>Nästa nivå: 125K</p>
        </div>
        </div>
      <div className="challenge3">
        <Plot />
     </div>
      </div>
  )
}

export default Dashboard;