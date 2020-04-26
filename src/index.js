import React from "react";
import ReactDOM from "react-dom";

/* Page Imports */
import Dashboard from 'Pages/Dashboard/Dashboard';
import Settings from 'Pages/Settings/Settings';
import About from './js/Pages/About/About';

// Router Imports
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Store} from "./js/Store";

import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
        <Store>
            <Router>
                <Route exact path="/" component={Dashboard} />
                <Route path="/settings" component={Settings} />
                <Route path="/about" component={About} />
            </Router>
            
        </Store>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));