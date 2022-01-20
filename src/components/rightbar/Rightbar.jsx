import React from 'react';
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                        <img className = "rightbarFollowingImg" src = {`${PF}person/detox.jpeg`} alt = "" />
                        <span className = 'rightbarFollowingName'>Detox</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = {`${PF}person/zohan.jpeg`} alt = "" />
                        <span className = 'rightbarFollowingName'>Scrappy Coco</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = {`${PF}person/alyssaedwards.jpeg`} alt = "" />
                        <span className = 'rightbarFollowingName'>Alyssa Edwards</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = {`${PF}person/adoredelano.jpeg`} alt = "" />
                        <span className = 'rightbarFollowingName'>Adore Delano</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = {`${PF}person/latriceroyale.jpeg`} alt = "" />
                        <span className = 'rightbarFollowingName'>Latrice Royale</span>
                    </div>
                    <div className = "rightbarFollowing">
                        <img className = "rightbarFollowingImg" src = {`${PF}person/katya.jpeg`} alt = "" />
                        <span className = 'rightbarFollowingName'>Katya Zamalodchikova</span>
                    </div>
                </div>
            </>
        );
    }
    
    return (
        <div className = 'rightbar'>
            <div className = "rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
