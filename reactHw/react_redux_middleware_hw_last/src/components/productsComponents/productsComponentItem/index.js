import {useDispatch, useSelector} from "react-redux";
import {addToWishList, removeFromWishList} from "../../../redux/actions_Create";


export default function ProductsItem({item}) {

    const dispatch = useDispatch()
    const {wishList} = useSelector(({products}) => products)

    const isInWishList = (wishList, id) => !!wishList.find(el => el.id === id)
    return (<div>
        <button onClick={() => {
            isInWishList(wishList, item.id) ? dispatch(removeFromWishList(item.id)) : dispatch(addToWishList(item.id))

        }}>{isInWishList(wishList, item.id) ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST'}
        </button>

        <h4>TITLE:{item.title}</h4>
        <h4>PRICE:{item.price}</h4>
        <img style={{
            width: '60%'
        }
        } src={`${item.image}`} alt="not found"/>

    </div>)
}
