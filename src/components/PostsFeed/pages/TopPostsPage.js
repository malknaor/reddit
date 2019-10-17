import React from 'react';

import PostsList from '../PostsList';

const TopPostsPage = props => {
    return (
        <div>
            <PostsList title="top" path="/top"/>
        </div>
    );
}

export default TopPostsPage;