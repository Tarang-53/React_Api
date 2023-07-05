
import React from 'react';
import "./sidebar.css";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material';
import {Users} from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarWrapper'>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon' />
            <span className="sidebarListText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className='sidebarIcon' />
            <span className="sidebarListText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className="sidebarListText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className="sidebarListText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className="sidebarListText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

