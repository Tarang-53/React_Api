import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
    const user = Users.filter(u => u.id === post.userId )[0];
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    function clickHandle() {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="ragnar lothbrok" className="postProfileImg" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="war scene" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="thumb up" onClick={clickHandle} className="likeIcon" />
                        <img src="/assets/heart.png" alt="red heart" onClick={clickHandle} className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
