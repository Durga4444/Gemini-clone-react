import React from 'react'
import "./Main.css"
import {assets} from "../assets/assets"
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello,Dev.</span></p>
                <p>How can I help You??</p>
            </div>
             
             <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful Places to see in Bangalore</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest Beautiful Places to see in Bangalore</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest Beautiful Places to see in Tirupathi</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Give Movie news</p>
                    <img src={assets.code_icon} alt="" />
                </div>
             </div>

             <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img class="gallery-icon" src={assets.gallery_icon} alt="" />
                        <img class="mic-icon"src={assets.mic_icon} alt="" />
                        <img class="send-icon"src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini is  a nice GPT
                </p>
             </div>
             </div>

           
    </div>
  )
}

export default Main
