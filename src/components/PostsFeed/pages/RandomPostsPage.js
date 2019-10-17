import React from 'react';

import PostsList from '../PostsList';

const RandomPostsPage = props => {
    return (
        <div>
            <PostsList title="random" path="/random"/>
        </div>
    );
}

export default RandomPostsPage;