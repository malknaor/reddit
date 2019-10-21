import { combineReducers } from 'redux';

import { FETCH_POSTS, SELECT_POSTS_TYPE, SELECT_POST } from '../actions/actionsTypes';
import fetchPostsReducer from './fetchPostsReducer';

const selectedPostTypeReducer = (state = [], action) => {
    if (action.type === SELECT_POSTS_TYPE) {
        return action.payload;
    }

    return state;
}

const selectedPostReducer = (selectedPost = null, action) => {
    if (action.type === SELECT_POST) {
        return action.payload;
    }

    return selectedPost;
};

export default combineReducers({
    posts: fetchPostsReducer,
    postType: selectedPostTypeReducer,
    selectSong: selectedPostReducer
});