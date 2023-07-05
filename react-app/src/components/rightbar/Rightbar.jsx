import React from 'react';
import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift-box.png" alt="gift" className="birthdayImg" />
          <span className="birthdayText">
            <b>Lagarth</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="iceland" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (<>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Kattegat</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Norway</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Firends</h4>
      <div className="userFollowings">
        <div className="userFollowing">
          <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile" className="userFollowingImg" />
          <span className="userFollowingName">Ragnar Lothbrok</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile" className="userFollowingImg" />
          <span className="userFollowingName">Ragnar Lothbrok</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile" className="userFollowingImg" />
          <span className="userFollowingName">Ragnar Lothbrok</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile" className="userFollowingImg" />
          <span className="userFollowingName">Ragnar Lothbrok</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile" className="userFollowingImg" />
          <span className="userFollowingName">Ragnar Lothbrok</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/Profile-pics/ragnar_lothbrok.jpg" alt="profile" className="userFollowingImg" />
          <span className="userFollowingName">Ragnar Lothbrok</span>
        </div>
      </div>
    </>)
  }

  return (
    <div className='rightbarContainer'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
