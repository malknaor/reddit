import React from 'react';

import PostsList from '../PostsList';

const BestPostsPage = props => {
    return (
        <div>
            <PostsList title="best" path="/best"/>
        </div>
    );
}

export default BestPostsPage;