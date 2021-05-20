import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
    setAlbums,
    resetAlbumsIsLoading,
    setAlbumsIsLoading
} from '../../redux/actionsCreate'
import Album from "./Almub";


export function Albums() {
    const dispatch = useDispatch()
    const {isLoading, albums} = useSelector(({albums}) => albums)


    const fetchPosts = async () => {
        try {

            dispatch(setAlbumsIsLoading())
            const response = await fetch(' https://jsonplaceholder.typicode.com/albums')
            const data = await response.json()
            dispatch(setAlbums(data))

        } catch (e) {
            dispatch(resetAlbumsIsLoading())
            console.log(e, 'shit')

        }
    }

    useEffect(() => {
            fetchPosts()

        },
        [])

    if (isLoading) {
        return <h1>LOADING</h1>
    }
    console.log(albums)
    return (<div>
        <h1>ALBUMS</h1>
        {albums.map(item => <Album value={item}/>)}

    </div>)
}

