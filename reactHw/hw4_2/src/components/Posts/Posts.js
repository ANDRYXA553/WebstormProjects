import React, {useState, useEffect} from 'react'


export default function Posts(items) {

    let [posts,users]=items.items


    return (<div>

       <div> {posts.map(item => <div>{item.userId}-{item.title}></div>)}</div>

    </div>)
}
