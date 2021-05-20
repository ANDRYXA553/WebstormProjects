import {RESET_POSTS_IS_LOADING, SET_POSTS, SET_POSTS_IS_LOADING,
    SET_Comments,
    SET_Comments_IS_LOADING,
    RESET_Comments_IS_LOADING,

    SET_Albums,
    SET_Albums_IS_LOADING,

    RESET_Albums_IS_LOADING
} from "../actions";

export const setPosts = (payload) => ({
    type: SET_POSTS, payload
})

export const resetPostsIsLoading = () => ({
    type: RESET_POSTS_IS_LOADING
})
export const setPostsIsLoading = () => ({
    type: SET_POSTS_IS_LOADING
})


export const setComments = (payload) => ({
    type: SET_Comments, payload
})

export const setCommentsIsLoading = () => ({
    type: SET_Comments_IS_LOADING
})
export const resetCommentsIsLoading = () => ({
    type: RESET_Comments_IS_LOADING
})

export const setAlbums = (payload) => ({
    type: SET_Albums, payload
})

export const setAlbumsIsLoading = () => ({
    type: SET_Albums_IS_LOADING
})
export const resetAlbumsIsLoading = () => ({
    type: RESET_Albums_IS_LOADING
})
