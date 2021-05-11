import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Character() {
    const match = useRouteMatch();
    console.log(match);
    let [character, setCharacter] = useState([])

    useEffect(() => {
        fetch(`https://api.sampleapis.com/futurama/characters/${match.params.id}`).then(value => value.json()).then(value => {
            console.log(value)
            setCharacter(value)
        })
    }, [])
    return (<div>

        <h2>{character.occupation}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.homePlanet}</h2>
    </div>)
}

