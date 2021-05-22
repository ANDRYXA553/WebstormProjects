import React, {useEffect} from "react";
import {resetProductsLoading, setProducts, setProductsLoading} from "../../redux/actions_Create";
import {useDispatch, useSelector} from "react-redux";
import ProductsItem from "./productsComponentItem";

export function Products() {
    const {products, isProductsLoading} = useSelector(({products}) => products)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        try {
            dispatch(setProductsLoading())
            const resp = await fetch('https://fakestoreapi.com/products')
            const data = await resp.json()
            dispatch(setProducts(data))
        } catch (e) {
            console.log(e, 'some error')

        } finally {
            dispatch(resetProductsLoading())
        }

    }

    useEffect(() => {
        fetchProducts()
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
