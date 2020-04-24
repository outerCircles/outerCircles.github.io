import React, {useState} from "react";

const ContactButton = ({name, dpUrl}) => {

    return (
        <>
            <a href="#">
                <div className="spaced-flex">
                <span className="material-icons">account_circle</span>
                <span>{name}</span>
                </div>
            </a>
        </>
    )
}

export default ContactButton;