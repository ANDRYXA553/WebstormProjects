import {
    SET_Comments,
    SET_Comments_IS_LOADING,
    RESET_Comments_IS_LOADING
    ,
} from "../../actions";

const initialState = {
    comments: [],
    isLoading: false,

};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_Comments: {
            return {
                ...state, comments: action.payload,
                isLoading: false
            }
        }
        case SET_Comments_IS_LOADING: {
            return {
                ...state, isLoading: true
            }
        }
        case RESET_Comments_IS_LOADING: {
            return {
                ...state, isLoading: false
            }
        }

        default: {
            return state
        }
    }


}