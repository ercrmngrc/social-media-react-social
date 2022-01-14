import React from 'react';
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
    
    const HomeRightbar = () => {
        return  (
            <>
                <div className = "birthdayContainer">
                    <img className = "birthdayImg" src = "assets/gift.png" alt = "" />
                    <span className = 'birthdayText'>
                        <b>Detox</b> and <b>2 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className = "rightbarAd" src = "assets/ad.jpeg" alt = "" />
                <h4 className = "rightbarTitle">Online Friends</h4>
                <ul className = "rightbarFriendList">
                    {Users.map(u => (
                        <Online key = {u.id} user = {u} />
                    ))}
                </ul>
            </>
        );
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className = 'rightbarTitle'>User info</h4>
                <div className = 'rightbarInfo'>
                    <div className = "rightbarInfoItem">
                        <span className = 'rightbarInfoKey'>City: </span>
                        <span className = 'rightbarInfoKeyValue'>Los Angeles</span>
                    </div>
                </div>
                <div className = 'rightbarInfo'>
                    <div className = "rightbarInfoItem">
                        <span className = 'rightbarInfoKey'>From: </span>
                        <span className = 'rightbarInfoKeyValue'>Shawnee</span>
                    </div>
                </div>
                <div className = 'rightbarInfo'>
                    <div className = "rightbarInfoItem">
                        <span className = 'rightbarInfoKey'>Relationship: </span>
                        <span className = 'rightbarInfoKeyValue'>Single</span>
                    </div>
                </div>
                <h4 className = 'rightbarTitle'>User friends</h4>
                <div className = "rightbarFollowings">
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = "assets/person/chadmichaels.jpeg" alt = "" />
                        <span className = 'rightbarFollowingName'>Chad Michaels</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = "assets/person/adoredelano.jpeg" alt = "" />
                        <span className = 'rightbarFollowingName'>Chad Michaels</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = "assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'rightbarFollowingName'>Chad Michaels</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = "assets/person/latriceroyale.jpeg" alt = "" />
                        <span className = 'rightbarFollowingName'>Chad Michaels</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = "assets/person/katya.jpeg" alt = "" />
                        <span className = 'rightbarFollowingName'>Chad Michaels</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = "assets/person/detox.jpeg" alt = "" />
                        <span className = 'rightbarFollowingName'>Chad Michaels</span>
                    </div>
                </div>
            </>
        );
    }
    
    return (
        <div className = 'rightbar'>
            <div className = "rightbarWrapper">
                <ProfileRightbar />
            </div>
        </div>
    );
}
