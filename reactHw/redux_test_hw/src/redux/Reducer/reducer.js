const initialValue = {
    counter: 0
}

const ACTIONS = {
    INCBY1: 'incBy1',
    INCBY100: 'incBy100',
    DECBY1: 'decBy1',
    DECBY100: 'decBy100'
}

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case ACTIONS.INCBY1:
            console.log(state.counter)
            return {...state,counter: state.counter + 1}

        case ACTIONS.INCBY100:
            return {counter: state.counter + 100}

        case ACTIONS.DECBY1:
            return {counter: state.counter - 1}

        case ACTIONS.DECBY100:
            return {counter: state.counter - 100}
        default:
            return state

    }


}

export {reducer,ACTIONS};






