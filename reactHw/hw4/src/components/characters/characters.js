import {useState, useEffect} from "react";
import {Link} from "react-router-dom";


export default function Characters() {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters').then(value => value.json().then(value => {
                console.log(value)
                let filteredValue = value.filter((item, index) => index < 9
                )
                console.log(filteredValue);
                setCharacters([...filteredValue])
            })
        )


    }, [])
    return (<div>
        {characters.map((item) => <Link to={`/posts/${item.id}`}>
            <div>{item.name.first}--{item.age}</div>
        </Link>)}
    </div>)
}