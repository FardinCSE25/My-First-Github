import React from 'react';
import { Link } from 'react-router';
import Home from './Home';
import App from '../src/App';

const Header = () => {
    return (
        <div>
            <h1>Hello This is header</h1>
            <Link to="/">Home</Link>
            <Link to={"/app"}>App</Link>
            <Link></Link>
        </div>
    );
};

export default Header;