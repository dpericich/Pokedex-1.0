import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import '../App.css';
import Nav from './Nav'

const App = () => {
    return(
        <div>
            <Router>
                <Nav />
                I am an app
            </Router>
        </div>
    );
}

export default App;