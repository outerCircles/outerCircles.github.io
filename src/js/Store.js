import React, {createContext, useReducer, useState} from 'react';
import ContactButton from './Pages/Dashboard/Sections/SideNav/components/ContactButton';

export const context = createContext();

const initialState = {
    activeChatID : 0,
    allMessages : []
}

export const contactsDB = {
    0:{name: "Kunal Dhawan", dpUrl: ""},
    1:{name: "Reynaldo Sia", dpUrl: ""},
    2:{name: "Jorge William", dpUrl: ""},
    3:{name: "Robin Bedford", dpUrl: ""}
}
export const getRecentContacts = () => {
    const recentContacts = Object.keys(contactsDB).map(contactID=> {
        return {
            id: contactID,
            name: contactsDB[contactID].name,
            dpUrl: contactsDB[contactID].dpUrl
        }
    });

    return recentContacts;
}

const getRecentMessages = contactID => {
    const msgs = {
        0: [{message: "Hey", senderID: 0, time:"10:30" },
            {message: "hello", senderID: 1, time:"10:30" }],
        1: [{message: "Bey", senderID: 0, time:"10:30" },
            {message: "Bello", senderID: 1, time:"10:30" }],
        2: [{message: "Hey3", senderID: 0, time:"10:30" },
            {message: "hello3", senderID: 1, time:"10:30" }],
        3: [{message: "Bey4", senderID: 0, time:"10:30" },
            {message: "Bello4", senderID: 1, time:"10:30" }]
    }
    return msgs[contactID];
}

const setUpInitialState = () => {
    const recentContacts = getRecentContacts();
    recentContacts.forEach(contact=> {
        initialState.allMessages[contact.id] = getRecentMessages(contact.id);
    })
}

const reducer = (state, action) => {
    const {sender, msg, id} = action.payload;
    switch(action.type){
        case 'RECEIVE': 
            return{
                ...state.allMessages,
                [id]: [
                    ...state.allMessages[id],
                    {
                        from: sender,
                        msg: msg
                    }
                ]
            }
        case 'SWITCH':
            
            const id = action.payload.newId;
            // console.log("Inside Switch " + id);
            return{
                ...state,
                ['activeChatID'] : id
                
            }
        default:
            return state;
    }
}

const Store = (props) => {
    setUpInitialState();
    const [storeObj, dispatch] = useReducer(reducer, initialState);
    
    return (
        <context.Provider value={{storeObj, dispatch}}>
            {props.children}
        </context.Provider>
    )
}

export {Store};
