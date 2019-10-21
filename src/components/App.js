import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import BestPostsPage from './PostsFeed/pages/BestPostsPage';
import HotPostsPage from './PostsFeed/pages/HotPostsPage';
import NewPostsPage from './PostsFeed/pages/NewPostsPage';
import TopPostsPage from './PostsFeed/pages/TopPostsPage';
import * as Routes from '../constants/Routes';
import '../css/main.css';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Navigation />
                <div className="posts-feed">
                    <Route path={"/"} exact component={BestPostsPage}></Route>
                    <Route path={Routes.HOT} component={HotPostsPage}></Route>
                    <Route path={Routes.NEW} component={NewPostsPage}></Route>
                    <Route path={Routes.TOP} component={TopPostsPage}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;