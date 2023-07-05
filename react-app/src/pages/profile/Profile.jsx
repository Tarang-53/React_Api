import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/posts/war.jpg" alt="cover" className="profileCoverImg" />
                            <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile pic" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoUsername">Ragnar Lothbrok</h4>
                            <span className="profileInfoDesc">I am the king Ragnar</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
                
            </div>
        </>
    )
}
