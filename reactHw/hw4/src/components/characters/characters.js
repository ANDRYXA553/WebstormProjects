import {useState, useEffect} from "react";


export default function Characters() {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters').then(value => value.json().then(value => {
            console.log(value)
            let filteredValue = value.filter((item,index)=>index<9


            )
            console.log(filteredValue);
                setCharacters([...filteredValue])
            })
        )


    }, [])
    return (<div>
        {characters.map((item) =><div>{item.name.first}-{item.age}</div>)}
    </div>)
}