import React from 'react';

import PostsList from '../PostsList';

const HotPostsPage = props => {
    return (
        <div>
            <PostsList title="hot" path="/hot"/>
        </div>
    );
}

export default HotPostsPage;