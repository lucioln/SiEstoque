import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {AuthProvedor} from './app/Context/auth';

ReactDOM.render(<AuthProvedor><App/></AuthProvedor>,
    document.getElementById('root')
);