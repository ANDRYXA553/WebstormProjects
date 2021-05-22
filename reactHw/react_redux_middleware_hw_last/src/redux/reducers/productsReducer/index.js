import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING,

    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../../actionsTypes'

const initialValue = {
    products: [],
    wishList: [],
    cart: [],
    isProductsLoading: false,

}
export const productsReducer = (state = initialValue, action) => {

    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, products: action.payload
            }

        }
        case SET_PRODUCTS_LOADING:
            return {
                ...state, isProductsLoading: true


            }
        case RESET_PRODUCTS_LOADING:
            return {
                ...state, isProductsLoading: false
            }
        case ADD_TO_WISHLIST: {

            const {payload} = action

            const alreadyExists = state.wishList.find(({id}) => id === payload)

                const itemProducts = state.products.find(el => el.id === payload)
            if (alreadyExists) {
                return state
            }

            return {
                ...state, wishList: [...state.wishList, itemProducts]
            }
        }
        case REMOVE_FROM_WISHLIST: {
            const {payload} = action;

            const isMissing = !state.wishList.find(({id}) => id === payload)

            if (isMissing) {
                return state
            }
            return {
                ...state, wishList: state.wishList.filter(el => el.id !== payload)
            }


        }
        case ADD_TO_CART: {
            return {
                ...state, cart: []
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state, cart: []
            }
        }

        default:
            return state
    }
}

