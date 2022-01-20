import React from 'react';
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className = "profile">
                <Leftbar />
                <div className = "profileRight">
                    <div className = "profileRightTop">
                        <div className = "profileCover">
                            <img 
                                className = "profileCoverImg"
                                src = {`${PF}post/zero.jpeg`}
                                alt = ""
                            />
                            <img 
                                className = "profileUserImg"
                                src = {`${PF}person/bradpitt.jpeg`}
                                alt = ""
                            />
                        </div>
                        <div className = "profileInfo">
                            <h4 className = 'profileInfoName'>William Bradley Pitt</h4>
                            <span className = 'profileInfoDesc'>Hello Everybody</span>
                        </div>
                    </div>
                    <div className = "profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
