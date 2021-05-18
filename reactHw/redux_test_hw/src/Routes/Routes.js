import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Counter from "../components/Counter/Counter";
import {Provider} from "react-redux";
import store from "../redux/Reducer";

export default function Routes() {

    return (<Router>
        <Provider store={store}>
            <Link to={'/home'}>Home</Link><br/>
            <Link to={'/counter'}>Counter</Link><br/>
            <Link to={'/about'}>About</Link>
            <Switch>

                <Route path={'/home'}><h1>HOME PAGE</h1></Route>
                <Route path={'/counter'}><Counter/></Route>
                <Route path={'/about'}><h1>About</h1></Route>
            </Switch>
        </Provider>
    </Router>)
}