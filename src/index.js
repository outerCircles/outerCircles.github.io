import React from "react";
import ReactDOM from "react-dom";

/* Sectional Imports */
import SideNav from "components/SideNav/SideNav";
import ConversationSection from "components/ConversationSection/ConversationSection";

import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
        <>
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
    </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));