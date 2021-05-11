import './App.css';
import Characters from "./components/characters/characters";
import Character from "./components/characters/character/character";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Inventory from "./components/inventory/inventory";
import InventoryItem from "./components/inventory/inventoryItem/inventoryItem";

function App() {
    return (
        <Router>
            <div className="App">
                < Link to={'/posts'}>Posts</Link>-
                < Link to={'/inventory'}>Inventory</Link>
                <Switch>
                    <Route path={'/posts'} exact={true} render={(value) => {

                        return <Characters/>
                    }}/>
                    <Route path={'/posts/:id'} render={(props => {
                        return <Character/>
                    })}>
                    </Route>
                    <Route path={'/inventory'} exact={true} render={(value) => {

                        return <Inventory/>
                    }}/>
                    <Route path={'/inventory/:id'} render={(props => {
                        return <InventoryItem/>
                    })}>
                    </Route>
                </Switch>
            </div>
        </Router>)
}

export default App;
