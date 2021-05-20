import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
    setComments,
    resetCommentsIsLoading,
    setCommentsIsLoading
} from '../../redux/actionsCreate'
import Comment from "./Comment";


export function Comments() {
    const dispatch = useDispatch()
    const {isLoading, comments} = useSelector(({comments}) => comments)


    const fetchPosts = async () => {
        try {

            dispatch(setCommentsIsLoading())
            const response = await fetch(' https://jsonplaceholder.typicode.com/comments')
            const data = await response.json()
            dispatch(setComments(data))

        } catch (e) {
            dispatch(resetCommentsIsLoading())
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
    console.log(comments)
    return (<div>
        <h1>Comments</h1>
        {comments.map(item => <Comment value={item}/>)}

    </div>)
}

