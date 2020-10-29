import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/navBar';
import Main from './components/main';

const App = () => {
    return (
        <Router>
            <Nav />
            <Main />
        </Router>
    );
};

export default App;
