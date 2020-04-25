import React, {useState} from "react";

const ActionButton = ({name, icon}) => {

    return (
        <>
            <a href="#">
                <div className="spaced-flex">
                <span>{name}</span>
                <span className="material-icons">{icon}</span>
                </div>
            </a>
        </>
    )
}

export default ActionButton;