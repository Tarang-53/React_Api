import "./closeFriend.css"

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="friends profile" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
