import React from 'react';
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <div className = 'share'>
            <div className = 'shareWrapper'>
                <div className = 'shareTop'>
                    <img className = "shareProfileImg" src = "/assets/person/chadmichaels.jpeg" alt = "" />
                    <input 
                    placeholder = "What's on your mind queen?"
                    className = 'shareInput'
                    />
                </div>
                <hr className = 'shareHr'/>
                <div className = 'shareBottom '>
                    <div className= "shareOptions">
                        <div className = "shareOption">
                            <PermMedia htmlColor = "royalblue" className = "shareIcon"/>
                            <span className = "shareOptionText">Photo or Video</span>
                        </div>
                        <div className = "shareOption">
                            <Label htmlColor = "mediumseagreen" className = "shareIcon"/>
                            <span className = "shareOptionText">Tag a Bitch</span>
                        </div>
                        <div className = "shareOption">
                            <Room htmlColor = "coral" className = "shareIcon"/>
                            <span className = "shareOptionText">Where you at?</span>
                        </div>
                        <div className = "shareOption">
                            <EmojiEmotions htmlColor = "fuchsia" className = "shareIcon"/>
                            <span className = "shareOptionText">Rumojis</span>
                        </div>
                    </div>
                    <button className = "shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
