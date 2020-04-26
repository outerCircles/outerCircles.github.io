import React from "react";
import logo from 'img/Logo.jpg' ;
import StarredSection from "./Sections/starred";
import RecentConversations from "./Sections/RecentConversations";
import ContactButton from "./components/ContactButton";
import SettingsSection from "./Sections/Settings";

const SideNav = () => {
    return (
        <div className="sidenav">
            <header>
                <div className="Title">
                    <img src={logo} alt="Logo" className="logo"/>
                    <span>Outer Circle</span>
                </div>
                <ContactButton name="Kunal Dhawan" className="mainUser" dpUrl=""/>
            </header>
            <main className="sidenav-main">
                <StarredSection />
                <RecentConversations />
            </main>
            
            <footer>
                <SettingsSection />
            </footer>
        </div>
    )
}

export default SideNav;