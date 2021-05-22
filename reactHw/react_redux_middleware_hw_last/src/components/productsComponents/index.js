import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductsItem from "./productsComponentItem";
import {fetchProducts} from "../../redux/actions_Create";

export function Products() {
    const {products, isProductsLoading} = useSelector(({products}) => products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts({
            field:'price',
            order:'ASC'
        }))
    }, [])

    if (isProductsLoading) {
        return <div>LOADING!!</div>
    }

    return (
        <>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h3>OUR STORE!</h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',

                }}>
                    <h3>CART: {0}</h3>
                    <h3 style={{
                        marginRight: '20px',
                        marginLeft: '20px'
                    }}>WISHLIST</h3>
                </div>
            </header>
            <hr/>
            {products.map(item => <ProductsItem key={item.id} item={item}/>)}

        </>
    )

}
