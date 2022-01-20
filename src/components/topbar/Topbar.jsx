import React from 'react';
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className = 'topbarContainer'>
            <div className = "topbarLeft">
                <Link to = "/" className = 'link'>
                    <span className = 'logo'>DragBeat</span>
                </Link>
            </div>
            <div className = "topbarCenter">
                <div className = 'searchbar'>
                    <Search className = 'searchIcon' />
                    <input placeholder = 'Search for friend, post or video' className = "searchInput" />
                </div>
            </div>
            <div className = "topbarRight">
                <div className = "topbarLinks">
                    <span className = 'topbarLink'>Homepage</span>
                    <span className = 'topbarLink'>Timeline</span>
                </div>
                <div className = 'topbarIcons'>
                    <div className = 'topbarIconItem'>
                        <Person />
                        <span className = 'topbarIconBadge'>234</span>
                    </div>
                    <div className = 'topbarIconItem'>
                        <Chat />
                        <span className = 'topbarIconBadge'>88</span>
                    </div>
                    <div className = 'topbarIconItem'>
                        <Notifications />
                        <span className = 'topbarIconBadge'>4</span>
                    </div>
                </div>
                <img src = "/assets/person/chadmichaels.jpeg" alt = "" className = "topbarImg" />
            </div>
        </div>
    )
}

