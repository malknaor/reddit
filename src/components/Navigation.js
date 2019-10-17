import React from 'react';

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
                    <a className="post-link" href="/">Best</a>
                    <a className="post-link" href={Routes.HOT}>Hot</a>
                    <a className="post-link" href={Routes.NEW}>New</a>
                    <a className="post-link" href={Routes.TOP}>Top</a>
                    {/* <a className="post-link" href={Routes.RANDOM}>Random</a>
                    <a className="post-link" href={Routes.TRENDING}>Trending</a> */}
                </div>
            </div>
        );
    }
}

export default Navigation;