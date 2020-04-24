import React from "react";
import MessageBox from "../components/MessageBox";

const ChatSection =  () => {
    return (
        <div className="chat-section">
            <div className="searchbar">
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <MessageBox message="random" time="10:30" senderID={1} />
            <MessageBox message="yo" time="12:30" senderID={0} />
        </div>
    )
}

export default ChatSection;