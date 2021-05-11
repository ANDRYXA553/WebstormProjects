import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function InventoryItem(obj) {

    console.log(obj)
    console.log(obj.obj)
    const match = useRouteMatch();
   let item = obj.obj.find((item)=> match.params.id==item.id)
    console.log(item)


    return (<div>

        <h2>DECRIPTION-{item.description}</h2>
        <h2>SLOGAN-{item.slogan}</h2>
        <h2>PRICE-{item.price}</h2>

    </div>)
}

