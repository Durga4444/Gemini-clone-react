import React from 'react'

import {assets} from './assets/assets'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Main/Main'
import "./index.css"
const App = () => {
  return (
       <div className="app">
          <Sidebar/>
          <Main/>
       </div>
  )
}

export default App
