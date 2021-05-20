import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Post from "./Post";
import {
    setPosts,
    resetPostsIsLoading,
    setPostsIsLoading
} from './../../redux/actionsCreate'


export function Posts() {
    const dispatch = useDispatch()
    const {isLoading, posts} = useSelector(({posts}) =>  posts)


    const fetchPosts = async () => {
        try {

            dispatch(setPostsIsLoading())
            const response = await fetch(' https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            dispatch(setPosts(data))

        } catch (e) {
            dispatch(resetPostsIsLoading())
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
    return (<div>
        <h1>POSTS</h1>
        {posts.map(item => <Post value={item}/>)}

    </div>)
}

