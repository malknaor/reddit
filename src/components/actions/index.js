import { FETCH_POSTS, SELECT_POSTS_TYPE, SELECT_POST } from './actionsTypes';
import reddit from '../API/reddit';

export const fetchPosts = postsType => async dispatch => {
    const response = await reddit.get(postsType);

    dispatch({ type: FETCH_POSTS, payload: response.data.data.children });
};

export const selectPostsType = postsType => {
    return {
        type: SELECT_POSTS_TYPE,
        payload: postsType
    };
};

export const selectPost = post => {
    return {
        type: SELECT_POST,
        payload: post
    };
};