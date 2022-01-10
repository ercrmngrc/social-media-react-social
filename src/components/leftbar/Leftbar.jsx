import React from 'react';
import "./leftbar.css";
import { RssFeed, Chat, PlayCircleOutline, People, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons";

export default function Leftbar() {
    return (
        <div className = 'leftbar'>
            <div className = 'leftbarWrapper'>
                <ul className = "leftbarList">
                    <li className = 'leftbarListItem'>
                        <RssFeed className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Feed</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <Chat className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Chats</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <PlayCircleOutline className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Videos</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <People className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Groups</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <Bookmark className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Bookmarks</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <HelpOutline className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Questions</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <WorkOutline className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Jobs</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <Event className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Events</span>
                    </li>
                    <li className = 'leftbarListItem'>
                        <School className = 'leftbarIcon'/>
                        <span className = 'leftbarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className = "leftbarButton">Show More</button>
                <hr className = 'leftbarHr'/>
                <ul className = "leftbarFiendList">
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className = "leftbarFriendImg" src = "/assets/person/alyssaedwards.jpeg" alt = "" />
                        <span className = 'leftbarFriendName'>Alyssa Edwards</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
