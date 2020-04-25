import React, {createContext, useReducer} from 'react';

export const context = createContext();

const initialState = {}

export const getRecentContacts = () => {
    const recentContacts = [
        { id: 0, name: "Kunal Dhawan", dpUrl: ""},
        { id: 1, name: "Reynaldo Sia", dpUrl: ""},
        { id: 2, name: "Jorge William", dpUrl: ""},
        { id: 3, name: "Robin Bedford", dpUrl: ""}
    ]

    return recentContacts;
}

const getRecentMessages = contactID => {
    return [
        {message: "Hey", senderID: 0, time:"10:30" }
    ]
}

const setUpInitialState = () => {
    const recentContacts = getRecentContacts();
    recentContacts.forEach(contact=> {
        initialState[contact.id] = getRecentMessages(contact.id);
    })
}

const reducer = (state, action) => {
    const {sender, msg, id} = action.payload;
    switch(action.type){
        case 'RECEIVE': 
            return{
                ...state,
                [id]: [
                    ...state[id],
                    {
                        from: sender,
                        msg: msg
                    }
                ]
            } 
        default:
            return state;
    }
}

const Store = (props) => {
    setUpInitialState();
    const reducerHook = useReducer(reducer, initialState);
    
    
    return (
        <context.Provider value={reducerHook}>
            {props.children}
        </context.Provider>
    )
}


export default Store;
