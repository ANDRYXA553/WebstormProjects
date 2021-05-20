
import {commentsReducer}  from './commentsReducer';

import {postReducer} from './postsReducer';
import {combineReducers} from "redux";
import {albumsReducer} from "./albumsReducer";

export const rootReducer=combineReducers({
    posts:postReducer,
    comments:commentsReducer,
    albums:albumsReducer
})