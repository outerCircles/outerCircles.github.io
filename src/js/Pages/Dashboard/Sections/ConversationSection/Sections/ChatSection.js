import React,{useContext, useRef, useEffect} from "react";
import MessageBox from "../components/MessageBox";

import {context, contactsDB} from "components/../Store";

const ChatSection =  () => {
    
    // Use context
    const {storeObj} = useContext(context);
    const {activeChatID, allMessages} = storeObj;
    const chatMessages = allMessages[activeChatID];
    const activeChatTitle = contactsDB[activeChatID].name;
    
    // referred from https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [chatMessages]);

    return (
        <div className="chat-section">
            <div className="searchbar">
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <div>
                <h2 className="chat-title">{activeChatTitle}</h2>
            </div>
            <div>
                {   
                    chatMessages.map(({message, time, senderID}, index) => 
                        <MessageBox key={index} message={message} time={time} senderID={senderID} />
                    )
                }
                 <div ref={messagesEndRef} />
            </div>
           
        </div>
    )
}

export default ChatSection;