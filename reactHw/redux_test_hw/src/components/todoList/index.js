import {useDispatch, useSelector} from "react-redux";
import {addItemToList} from "../../redux/createAction";
import {useState} from "react";
import TodoItem from "./todoItem";

export default function TodoList() {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState(null)

    const addToList = () => {
        dispatch(addItemToList(inputText))
    }
    return (<div>

        <input type="text" id={'input'} onChange={(e) => {
            setInputText(e.target.value)
        }} name={'inputText'}/>


        <button onClick={() => {
            addToList()

        }}>ADD
        </button>

        <hr/>

        {store && store.map((item, index) => <TodoItem index={index} item={item}/>)}

    </div>)
}
