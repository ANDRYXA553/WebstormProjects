import React, {useState} from 'react'


export default function Users(items) {

    let [posts, users] = items.items
    let [postToShow, setPostDetail] = useState(null)

    const showPosts = (Id) => {

        let foundPosts = posts.filter(item => {
            return item.userId === Id

        })
        setPostDetail(foundPosts)

    }

    return (
        <div>

            {users.map((item) => <div>{item.id}-{item.name}
                <button onClick={() => showPosts(item.id)}>SHOW_DETAILS</button>
            </div>)}
            {postToShow && postToShow.map(item => <div><hr/>{item.body}<hr/></div>)}}
        </div>
    )
}
