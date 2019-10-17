import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import BestPostsPage from './PostsFeed/pages/BestPostsPage';
import HotPostsPage from './PostsFeed/pages/HotPostsPage';
import NewPostsPage from './PostsFeed/pages/NewPostsPage';
import RandomPostsPage from './PostsFeed/pages/RandomPostsPage';
import TopPostsPage from './PostsFeed/pages/TopPostsPage';
import TrendingPostsPage from './PostsFeed/pages/TrendingPostsPage';
import * as Routes from '../constants/Routes';
import '../css/main.css';

// const renderAccountFeatures = async () => {
//     const response = await reddit.get('/me')
//     .catch(err => console.log(err));

//     console.log(response.data.features);
// }

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
                    {/* <Route path={Routes.RANDOM} component={RandomPostsPage}></Route>
                    <Route path={Routes.TRENDING} component={TrendingPostsPage}></Route> */}
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;