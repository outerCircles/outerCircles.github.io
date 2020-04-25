import React, { useContext } from "react";
import SideNav from "./Sections/SideNav/SideNav"
import ConversationSection from "./Sections/ConversationSection/ConversationSection";

const Dashboard = () => {

 
    return (
        <main>
            <SideNav />

            <section className="main-section">
                <header>
                    <div>
                        <nav id="page-nav">
                        {/* <!-- [THE HAMBURGER] --> */}
                        <label htmlFor="hamburger">&#9776;</label>
                        <input type="checkbox" id="hamburger"/>
                    
                        {/* <!-- [MENU ITEMS] --> */}
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                        </ul>
                        </nav>
                    </div>
                </header>

                <main>
                    <ConversationSection />
                </main>

                <footer className="footer">
               
                </footer>
            </section>
        </main>
    )
}

export default Dashboard;