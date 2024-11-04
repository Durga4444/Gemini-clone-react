import React, { useState, useContext } from 'react';
import './Main.css';
import { assets } from '../assets/assets';
import { Context } from '../../context/context'; 

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context); 
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      <div className="main-container">
        {
            !showResult?<>
             <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you?</p>
        </div>

        <div className="cards">
          <div className="card" >
            <p>Suggest beautiful places to see in Bangalore</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card" >
            <p>Suggest beautiful places to see in Bangalore</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card" >
            <p>Suggest beautiful places to see in Tirupati</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card" >
            <p>Give movie news</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>
            </>
        :
        <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
               <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?<div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }</div>
            </div>
        }
   

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)} 
            />
            <div>
              <img
                className="gallery-icon"
                src={assets.gallery_icon}
                alt="Gallery Icon"
                onClick={() => handleIconClick("Open gallery")}
              />
              <img
                className="mic-icon"
                src={assets.mic_icon}
                alt="Mic Icon"
                onClick={() => handleIconClick("Activate voice input")}
              />
              <img
                className="send-icon"
                src={assets.send_icon}
                alt="Send Icon"
                onClick={() => onSent(input)}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini is a nice GPT
          </p>
        </div>   
      </div>
    </div>
  );
};

export default Main;