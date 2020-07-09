import React, {createContext, useReducer} from 'react';
import io from "socket.io-client";
import moment from "moment";
const endPoint = 'https://outercircles.herokuapp.com/';

export const context = createContext();

export const myID = Date.now();

const initialState = {
    activeChatID : 0,
    allMessages : []
}

export const contactsDB = {
    0:{name: "Overwatch", dpUrl: ""},
    1:{name: "CS Go", dpUrl: ""},
    2:{name: "Volarant", dpUrl: ""},
    3:{name: "Call of Duty", dpUrl: ""}
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

const getCurrentTime = () => {
    const now = moment();
    return now.format("hh:mm a") ;
}

const getRecentMessages = contactID => {
    const msgs = {
        0: [{message: "Hey, lets chat here !!", senderID: 0, time:getCurrentTime() }],
        1: [{message: "Hey, lets chat here !!", senderID: 0, time:getCurrentTime()}],
        2: [{message: "Hey, lets chat here !!", senderID: 0, time:getCurrentTime()}],
        3: [{message: "Hey, lets chat here !!", senderID: 0, time:getCurrentTime() }]
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
    const {sender, receiver, msg, time} = action.payload;
    switch(action.type){
        case 'RECEIVE':
            return {
                ...state,
                ['allMessages']: {
                    ...state.allMessages,
                    [receiver]: [
                            ...state['allMessages'][receiver],
                            {message: msg, senderID: sender, time:time }
                    ]
                }
                
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

let socket;

const sendChatMessage = (message, to) => {
    socket.emit('new message', {
        msg : message,
        sender : myID,
        receiver : parseInt(to),
        time: getCurrentTime()
    });
}

const Store = (props) => {
    
    setUpInitialState();
    const [storeObj, dispatch] = useReducer(reducer, initialState);

    if(!socket){
        socket = io(endPoint);

        socket.on('new message', (message) => {
            const {msg, sender, receiver, time} = message;
            // Send Message
            dispatch({type:'RECEIVE', payload:{sender:sender, receiver:receiver, msg:msg, time:time}});
        });
    }

    return (
        <context.Provider value={{storeObj, dispatch, sendChatMessage}}>
            {props.children}
        </context.Provider>
    )
}

export {Store};
