import React from 'react'
import Main from './Main/Main'
import "./index.css"
import Sidebar from './Components/sidebar/Sidebar'
const App = () => {
  return (
       <div className="app">
        <Sidebar/>
        <Main/>
       </div>
  )
}

export default App
