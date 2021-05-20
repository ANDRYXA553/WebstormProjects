import {ADDITEMTOLIST,REMOVEITEMFROMLIST} from "../actionsTypes";

export const addItemToList=(payload)=>{

    return {type:ADDITEMTOLIST,payload}

}
export const removeItem=(payload)=>{

    return {type:REMOVEITEMFROMLIST,payload}
}
