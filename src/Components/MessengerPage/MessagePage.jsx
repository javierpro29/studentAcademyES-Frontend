import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import MessageSection from '../Sections/MessageSection/MessageSection';
import { RiArrowLeftLine } from 'react-icons/ri';
import style from './MessagePage.module.css';
import profile from '../../assets/images/profile.png';

const MessagePage = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { id: 1, sender: 'user', text: 'Hey there!' },
        { id: 2, sender: 'friend', text: 'Hi! What\'s up?' },
        { id: 3, sender: 'user', text: 'Not much, just hanging out. How about you?' },
        { id: 4, sender: 'friend', text: 'Same here, just relaxing at home.' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleNavigation = (route) => {
        navigate(route);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, sender: 'user', text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>
                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Messenger</h2>
                </div>

                <div className={style.topSection}>
                    <img src={profile} alt="Profile" className={style.topImage} />
                    <div>
                        <h2 className={style.title}>Friend Name</h2>
                        <h3 className={style.subtitle}>@friend_username</h3>
                    </div>
                </div>

                <div className={style.publications}>
                    {messages.map((message) => (
                        <div key={message.id} className={style.publication}>
                            <div
                                className={`${style.messageContainer} ${message.sender === 'user' ? style.userMessage : style.friendMessage
                                    }`}
                            >
                                <div className={style.profileInfo}>
                                    <img src={profile} alt="Profile" className={style.profileImage} />
                                </div>
                                <div className={style.messageBox}>
                                    <div className={style.messageTriangle} />
                                    <p className={style.messageContent}>{message.text}</p>
                                    <span className={style.postTime}>{message.sender === 'user' ? 'You' : 'Friend'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={style.footer}>
                    <form onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <MessageSection />
        </div>
    );
};

export default MessagePage;
