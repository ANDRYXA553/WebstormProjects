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
                </Switch>
            </div>
        </Router>)
}

export default App;
