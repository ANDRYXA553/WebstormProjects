import {useState, useEffect} from "react";
import InventoryItem from "./inventoryItem/inventoryItem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Inventory() {

    let [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory').then(value => value.json().then(value => {
                let filteredValue = value.filter((item, index) => index < 9
                )
                setInventory([...filteredValue])
            })
        )
    }, [])
    return (<div>
        {inventory.map((item) => <Link to={`/inventory/${item.id}`}>
            <div>{item.title}--{item.category}</div>
            <Route path={`/inventory/${item.id}`}><InventoryItem obj={item}/></Route>
        </Link>)}
    </div>)
}
