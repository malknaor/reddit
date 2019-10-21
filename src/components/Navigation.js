import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../constants/Routes';
import '../css/main.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="header">
                    <img className="reddit-icon" src={require('../resources/reddit-icon.svg')} alt="reddit-icon"></img>
                    <h1 className="reddit-title">reddit</h1>
                </div>
                <div className="posts-navigation">
                    <Link className="post-link" to="/">Best</Link>
                    <Link className="post-link" to={Routes.HOT}>Hot</Link>
                    <Link className="post-link" to={Routes.NEW}>New</Link>
                    <Link className="post-link" to={Routes.TOP}>Top</Link>
                </div>
            </div>
        );
    }
}

export default Navigation;