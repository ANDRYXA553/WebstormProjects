import {
    SET_Albums,
    SET_Albums_IS_LOADING,
    RESET_Albums_IS_LOADING
    ,
} from "../../actions";

const initialState = {
    albums: [],
    isLoading: false,

};

export const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_Albums: {
            return {
                ...state, albums: action.payload,
                isLoading: false
            }
        }
        case SET_Albums_IS_LOADING: {
            return {
                ...state, isLoading: true
            }
        }
        case RESET_Albums_IS_LOADING: {
            return {
                ...state, isLoading: false
            }
        }

        default: {
            return state
        }
    }


}