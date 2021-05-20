import {SET_POSTS,RESET_POSTS_IS_LOADING,SET_POSTS_IS_LOADING} from "../../actions";

const initialState = {
    posts: [],
    isLoading: false,

};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state, posts: action.payload,
                isLoading: false
            }
        }
        case SET_POSTS_IS_LOADING: {
            return {
                ...state, isLoading: true
            }
        }
        case RESET_POSTS_IS_LOADING: {
            return {
                ...state, isLoading: false
            }
        }

        default: {
            return state
        }
    }


}