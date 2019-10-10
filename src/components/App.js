import React from 'react';
import reddit from './API/reddit';

const renderBestPosts = async () => {
    const response = await reddit.get('/best')
    .catch(err => console.log(err));

    console.log(response);
}

const renderAccountFeatures = async () => {
    const response = await reddit.get('/api/v1/me.json')
    .catch(err => console.log(err));

    console.log(response.data.features);
}

const App = () => {
    renderBestPosts();
    renderAccountFeatures();

    return (
        <div>
            App
            <div>
                Content
            </div>
        </div>
    );
};

export default App;