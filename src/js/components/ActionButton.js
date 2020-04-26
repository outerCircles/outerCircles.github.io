import React, {useState} from "react";
import {Link} from "react-router-dom";

const ActionButton = ({to, name, icon}) => {

    return (
        <>
            <Link to={`/${to}`}>
                <div className="spaced-flex">
                    <span>{name}</span>
                    <span className="material-icons">{icon}</span>
                </div>
            </Link>
        </>
    )
}

export default ActionButton;