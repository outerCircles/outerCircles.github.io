import React, {useContext, useState, useCallback} from "react";
import {context} from "components/../Store";

const ContactButton = ({id, name, dpUrl}) => {
    const {dispatch} = useContext(context);
    return (
        <>
            <button type="button" onClick={e=>dispatch({type:'SWITCH', payload:{newId:id}})}>
                <div className="spaced-flex" className="mainUser">
                <span className="material-icons userIcon userButton">account_circle</span>
                <span>{name}</span>
                </div>
            </button>
        </>
    )
}

export default ContactButton;