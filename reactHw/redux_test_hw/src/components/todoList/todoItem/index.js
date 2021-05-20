import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../../redux/createAction";

export default function TodoItem({index, item}) {
    const store = useSelector(store => store)
    const dispatch = useDispatch()

    const deleteUser = () => {

        store.splice(index, 1)

        dispatch(removeItem(store))
    }


    return (<div><h2>{item}</h2>
        <button onClick={() => {
            deleteUser()
        }}>DELETE
        </button>
    </div>)
}



