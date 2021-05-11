import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function InventoryItem() {
    const match = useRouteMatch();
    console.log(match);
    let [inventoryItem, setInventoryItem] = useState([])

    useEffect(() => {
        fetch(`https://api.sampleapis.com/futurama/inventory/${match.params.id}`).then(value => value.json()).then(value => {
            console.log(value)
            setInventoryItem(value)
        })
    }, [])
    return (<div>
        <h2>{inventoryItem.description}</h2>
        <h2>{inventoryItem.slogan}</h2>
        <h2>{inventoryItem.price}</h2>
    </div>)
}

