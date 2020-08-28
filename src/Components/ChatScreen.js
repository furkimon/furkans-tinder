import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import '../Assets/ChatScreen.css'
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Bill",
            image: "https://indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/24/447516-1177808816.jpg?itok=Qi1fqWWB",
            message: "What's up?"
        },
        {
            name: "Bill",
            image: "https://indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/24/447516-1177808816.jpg?itok=Qi1fqWWB",
            message: "How's it going<3"
        },
        {
            message: "fine babe, how u doin"
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message:input}])
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Bill on 10/08/2020</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>

                )
                
            ))}
            <div>
                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type="text"
                    />
                    <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>


        </div>
    )
}

export default ChatScreen
