import React,{useState} from "react";
import IconButton from "components/IconButton";

const InteractSection = () => {

    const [textValue, changeTextValue] = useState('');

    return (
        <div className="bottomBar">
            <textarea name="" id="" cols="50" rows="2" 
                onChange={e=> changeTextValue(e.target.value)} placeholder="Type Something">
            </textarea>
            <div className="message-options">
                <IconButton icon="send"></IconButton>
                <IconButton icon="attachment"></IconButton>
                <IconButton icon="sentiment_satisfied_alt"></IconButton>
                {/*   className="material-icons">sentiment_satisfied_alt</span> */}
            </div>
        </div>
    )
}

export default InteractSection;