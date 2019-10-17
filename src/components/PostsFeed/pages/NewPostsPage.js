import React from 'react';

import PostsList from '../PostsList';

const NewPostsPage = props => {
    return (
        <div>
            <PostsList title="new" path="/new"/>
        </div>
    );
}

export default NewPostsPage;