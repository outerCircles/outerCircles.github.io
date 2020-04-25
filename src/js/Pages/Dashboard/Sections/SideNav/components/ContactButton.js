import React, {useState} from "react";

const ContactButton = ({id, name, dpUrl}) => {
    const [contactId, getID] = useState(id);
    
    return (
        <>
            <button type="button" onClick = {e=>console.log(id)}>
                <div className="spaced-flex">
                <span className="material-icons">account_circle</span>
                <span>{name}</span>
                </div>
            </button>
        </>
    )
}

export default ContactButton;