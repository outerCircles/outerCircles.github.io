import React from "react";

const IconButton = ({icon, action}) => {
    return (
        <button type="button" className="material-icons" onClick={action}>{icon}</button>
    )
}

export default IconButton;