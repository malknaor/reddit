import { FETCH_POSTS } from '../actions/actionsTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data.data.children;
        default: 
            return state;
    }
};