import React from "react";
import ContactButton from "../components/ContactButton";

const RecentConversations = () =>{

    const getRecentContacts = () => {
        const recentContacts = [
            { name: "Kunal Dhawan", dpUrl: ""},
            { name: "Reynaldo Sia", dpUrl: ""},
            { name: "Jorge William", dpUrl: ""},
            { name: "Robin Bedford", dpUrl: ""}
        ]
    
        return recentContacts;
    }
    
    const recentContacts = getRecentContacts().map(({name, dpUrl}, index) => <ContactButton key={index} name = {name} dpUrl = {dpUrl}/>);

    return (
        <section>
            <h3>Recent Chats</h3>
            <div className="conversations-nav">
                {recentContacts}
            </div>
        </section>
    )
}

export default RecentConversations;