import React from 'react';
import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
    return (
        <div className = "post">
            <div className = "postWrapper">
                <div className = "postTop">
                    <div className = "postTopLeft">
                        <img className = "postProfileImg" src = "/assets/person/chadmichaels.jpeg" alt = "" />
                        <span className = "postUsername">Chad Michaels</span>
                        <span className = "postDate">6 minutes agao</span>
                    </div>
                    <div className = "postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className = "postCenter">
                    <span className = "postText">I'm Cher BITCH!</span>
                    <img className = "postImg" src = "assets/post/one.jpeg" alt = "" />
                </div>
                <div className = "postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeIcon" src = "assets/thumbsup.png" alt = "" />
                        <img className = "likeIcon" src = "assets/heart.png" alt = "" />
                        <span className = 'postlikeCounter'>47 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
