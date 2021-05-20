
import {commentsReducer}  from './commentsReducer';

import {postReducer} from './postsReducer';
import {combineReducers} from "redux";

export const rootReducer=combineReducers({
    posts:postReducer,
    comments:commentsReducer
})