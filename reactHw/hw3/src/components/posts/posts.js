import {useState, useEffect} from "react";
import Post from './post/post'

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [detail, setDetail] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json()
                .then(value => {
                    setPosts([...value])
                    console.log(value);

                })
            )
        console.log(posts);
    }, [])

    const postDetail = (item) => {
        setDetail(item)
        console.log(item)
    }
    return (<div className={'main'}>
        <div>{
            posts.map(item => <Post key={item.id} item={item} postDetail={postDetail}/>
            )}
        </div>
        <div className={'postDetail'}>
            {detail && <h4>{detail.id} - {detail.body}</h4>}
        </div>

    </div>)
}
