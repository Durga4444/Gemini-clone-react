import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import {assets} from '../../assets/assets'
const App = () => {
  return (
    <div>
<Sidebar>
  <div className="top">
     <img src={assets.menu_icon} alt="" />
  </div>
  <div className="bottom"></div>
</Sidebar>
    </div>
  )
}

export default App
