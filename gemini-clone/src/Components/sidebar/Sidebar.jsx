import React from 'react'
import {useState} from 'react'
import "./Sidebar.css"
import {assets} from '../../assets/assets'
const Sidebar = () => {
    const [extended,setExtended] = useState(false)
    function toggleSidebar(){
           setExtended(!extended);
    }
  return (
    
     <div className="sidebar">

        <div className="top">
           <img onClick={toggleSidebar} className="menu" src={assets.menu_icon} alt="" />

           <div className="new-chat">
            <img src={assets.plus_icon}alt="" className="assets plus-icon" />
            {extended?<p>New Chat</p>:null} 
           </div>
           {extended?<div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is React..</p>
            </div>
           </div>:null}
           

        </div>

        <div className="bottom">
         <div className="bottom-item recent-entry">
            {extended?<>
                <img src={assets.question_icon} alt="" />
                <p>Help</p></>:null}
           
         </div>

         <div className="bottom-item recent-entry">
            {extended?<>
                <img src={assets.history_icon} alt="" />
                 <p>Activity</p></>
                :null}
            
         </div>

         <div className="bottom-item recent-entry">
         {extended?<>
            <img src={assets.setting_icon} alt="" />
            <p>Settings</p></>
           :null}
         </div>
        </div>
     </div>
  )
}

export default Sidebar
