import React from "react";
import ReactDOM from "react-dom";

/* Page Imports */
import Dashboard from 'Pages/Dashboard/Dashboard';

import Store from "./js/Store";

import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
        <Store>
            <Dashboard />
        </Store>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));