import React,{useState, useContext} from "react";
import IconButton from "components/IconButton";
import {context} from "components/../Store";

const InteractSection = () => {

    const {storeObj, sendChatMessage} = useContext(context);
    const {activeChatID} = storeObj;
    const [textValue, changeTextValue] = useState('');

    const sendMessage = () => {
        sendChatMessage(textValue, activeChatID);
        //Reset Text
        changeTextValue('');
    }
    return (
        <div className="bottomBar">
            <textarea placeholder="send message" id="" cols="50" rows="2" value = {textValue}
                onChange={e=> changeTextValue(e.target.value)}>
            </textarea>
            <div className="message-options">
                <IconButton icon="send" action = {sendMessage}></IconButton>
                <IconButton icon="attachment"></IconButton>
                <IconButton icon="sentiment_satisfied_alt"></IconButton>
            </div>
        </div>
    )
}

export default InteractSection;