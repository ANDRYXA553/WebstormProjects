import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Character(props) {
    const match = useRouteMatch();
    console.log(match);
    let [character, setCharacter] = useState([])

    useEffect(() => {
        fetch(`https://api.sampleapis.com/futurama/characters/${match.params.id}`).then(value => value.json()).then(value => {
            setCharacter(value)
        })
    }, [])
    return (<div>{character.occupation}</div>)
}

