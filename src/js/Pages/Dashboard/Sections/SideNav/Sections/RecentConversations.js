import React from "react";
import ContactButton from "../components/ContactButton";
import {getRecentContacts} from "components/../Store";

const RecentConversations = () =>{
    
    const recentContacts = getRecentContacts().map(({id, name, dpUrl}, index) => <ContactButton key={index} id = {id} name = {name} dpUrl = {dpUrl}/>);

    return (
        <section>
            <h3>Channels</h3>
            <div className="conversations-nav">
                {recentContacts}
            </div>
        </section>
    )
}

export default RecentConversations;