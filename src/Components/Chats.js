import React from 'react'
import Chat from './Chat'
import '../Assets/Chats.css'

function Chats() {
    return (
        <div className="chats">
           
            <Chat
                name="Bill Gates"
                message="fine babe, how u doin"
                timestamp="2 days ago"
                profilePic="https://indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/24/447516-1177808816.jpg?itok=Qi1fqWWB"
            />
        </div>
    )
}

export default Chats
