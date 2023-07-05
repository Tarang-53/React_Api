import React from 'react';
import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material/"
import { Link } from 'react-router-dom';

function Topbar() {
    return ( 
        <div className="topbarContainer">
            <div className='topbarLeft'>
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className='logo'>The-logo</span>
                </Link>
            </div>
            <div className='topbarCenter'>
                <div className='searchBar'>
                    <Search className='searchIcon' />
                    <input className='searchInput' placeholder='Search for friends, posts or video'></input>
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <Link to="/profile/ragnar_lothbrok">
                <img src='/assets/Profile-pics/ragnar_lothbrok.jpg' alt='profile' className='topbarImg'/>
                </Link>
            </div>
        </div>
    );
}

export default Topbar;