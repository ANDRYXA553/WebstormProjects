import {useSelector, useDispatch} from "react-redux";
import {ACTIONS} from "../../redux/Reducer/reducer";

export default function Counter() {
    let counter = useSelector((state => state.counter))
    let dispatch = useDispatch()

    return (<div>
        <h1>{counter}</h1>
        <button onClick={() => {
            dispatch({type: ACTIONS.INCBY1})
        }}>+1
        </button>
        <button onClick={() => {
            dispatch({type: ACTIONS.INCBY100})
        }}>+100
        </button>
        <button onClick={() => {
            dispatch({type: ACTIONS.DECBY1})
        }}>-1
        </button>
        <button onClick={() => {
            dispatch({type: ACTIONS.DECBY100})
        }}>-100
        </button>
    </div>)
}