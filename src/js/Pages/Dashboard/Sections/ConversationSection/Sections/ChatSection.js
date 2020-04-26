import React,{useContext, useState} from "react";
import MessageBox from "../components/MessageBox";

import {context, contactsDB} from "components/../Store";

const ChatSection =  () => {
    
    // Use context
    const {storeObj, dispatch} = useContext(context);
    const {activeChatID, allMessages} = storeObj;
    const chatMessages = allMessages[activeChatID];
    const activeChatTitle = contactsDB[activeChatID].name;
    return (
        <div className="chat-section">
            <div className="searchbar">
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <div>
                <h2>{activeChatTitle}</h2>
            </div>
            <div>
            {   
                chatMessages.map(({message, time, senderID}, index) => {
                    return <MessageBox key={index} message={message} time={time} senderID={senderID} />
                })
                
            }
            </div>
        </div>
    )
}

export default ChatSection;