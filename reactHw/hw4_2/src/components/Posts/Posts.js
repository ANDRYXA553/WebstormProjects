import React, {useState, useEffect} from 'react'
import './posts.css'

export default function Posts(items) {

    let [posts, users] = items.items
    let [comments, setComments] = useState([]);
    let [commentsToShow, setCommentsToShow] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json().then(value => setComments(value)))

    }, [])

    const showComments = (Id) => {
        let foundComments = comments.filter(item => {

            return item.postId === Id
        })
        setCommentsToShow(foundComments)
    }


    return (<div>

        <div className={'posts'}>
            <div> {posts.map(item => <div>{item.userId}-{item.title}
                <button onClick={() => showComments(item.userId)}>SHOW_DETAILS</button>
            </div>)}</div>
            <div>{commentsToShow && commentsToShow.map(item => <div>{item.name}</div>)}</div>
        </div>

    </div>)
}
