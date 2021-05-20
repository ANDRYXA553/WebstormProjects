import {ADDITEMTOLIST, REMOVEITEMFROMLIST} from "../actionsTypes";

const initialValue = [];


export const reducer = (state = initialValue, action) => {

    switch (action.type) {
        case ADDITEMTOLIST:
            return [...state,action.payload]
        case REMOVEITEMFROMLIST:
            return [...state]

        default:
            return state
    }

}
