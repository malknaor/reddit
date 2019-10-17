import React from 'react';

import PostsList from '../PostsList';

const TrendingPostsPage = props => {
    return (
        <div>
            <PostsList title="trending" path="/trending"/>
        </div>
    );
}

export default TrendingPostsPage;