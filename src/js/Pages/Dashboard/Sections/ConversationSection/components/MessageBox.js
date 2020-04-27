import React from "react";

const applyStyle = (senderID) => {
    
    let boxClass = senderID > 0 ? "others-chat-box" : "mychat-box";
    
    return boxClass;
}

const MessageBox = ({message, time, senderID}) => {
    
    return (
        <>  
            <div className={`chat-box ${applyStyle(senderID)}`}>
                <p>{message}</p>
                <div className="chat-time"><time dateTime={`T${time}`}>{time}</time></div>
             </div>
        </>
    )
}

export default MessageBox;