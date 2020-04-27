import React from "react";

const IconButton = ({icon, action}) => {
    return (
        <button type="button" className="icon-button" onClick={action}><span className="material-icons">{icon}</span></button>
    )
}

export default IconButton;