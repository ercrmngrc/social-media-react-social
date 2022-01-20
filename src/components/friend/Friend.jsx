import React from 'react';
import "./friend.css";

export default function Friend({user}) {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="leftbarFriend">
            <img 
                className = "leftbarFriendImg"
                src = {PF + user.profilePicture}
                alt = ""
            />
            <span className = 'leftbarFriendName'>{user.username}</span>
        </li>
    )
}
