import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

//
// export default function Inventory() {
//
//     let [inventory, setInventory] = useState([]);
//
//     useEffect(() => {
//         fetch('https://api.sampleapis.com/futurama/inventory').then(value => value.json().then(value => {
//                 console.log(value)
//                 let filteredValue = value.filter((item, index) => index < 9
//                 )
//                 console.log(filteredValue);
//                 setInventory([...filteredValue])
//             })
//         )
//     }, [])
//     return (<div>
//         {inventory.map((item) => <Link to={`/inventory/${item.id}`}>
//             <div>{item.title}--{item.category}</div>
//         </Link>)}
//     </div>)
// }

export default function Inventory() {

    let [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory').then(value => value.json().then(value => {
                console.log(value)
                let filteredValue = value.filter((item, index) => index < 9
                )
                console.log(filteredValue);
                setInventory([...filteredValue])
            })
        )
    }, [])
    return (<div>
        {inventory.map((item) => <Link to={`/inventory/${item.id}`}>
            <div>{item.title}--{item.category}</div>
        </Link>)}
    </div>)
}

// to={`/inventory/${item.id}`}