import React,{useContext} from "react";
import MessageBox from "../components/MessageBox";

import {context} from "../../../../../Store";
   
const ChatSection =  () => {

    // Use context
    const [allChats] = useContext(context);
    const contacts = Object.keys(allChats);
    const activeChat = contacts[0];
    
    return (
        <div className="chat-section">
            <div className="searchbar">
                <input className="input" type="text" placeholder="Search"/>
            </div>
            <div>
                <h2>{"ABC"}</h2>
            </div>
            <div>
            {   
                allChats[activeChat].map(({message, time, senderID}, index) => {
                    return <MessageBox key={index} message={message} time={time} senderID={senderID} />
                })
                
            }
            </div>
        </div>
    )
}

export default ChatSection;