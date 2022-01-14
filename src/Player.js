import React from "react";
import './Player.css'

function Player(props) {

    const { headShotSrc, fn, ln, avg, tot } = props
  

    return (

        <div className = "Player">
          
            <div className = "item">
                <img className = "headShot" src={headShotSrc} />
            </div>
            <div className = "item">{fn}</div>
            <div className = "item">{ln}</div>
            {Object.keys(avg).map(key => (
                <div className = "item" key = {key} value={key}>{key} {" : "}{avg[key]}</div>
            ))}
          
        </div>
    )
}

export default Player;