import './App.css';
import {Provider} from "react-redux";

import {store} from "./redux";
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Albums} from "./components/Albums";

function App() {
    return (
        <div className="App">
            <Router>
                <Provider store={store}>
                    <Link to={'/posts'}>POSTS</Link>--
                    <Link to={'/albums'}>ALBUMS</Link>--
                    <Link to={'/comments'}>COMMENTS</Link>
                    <Switch>
                      <Route path={'/posts'}><Posts/></Route>
                        <Route path={'/comments'}><Comments/></Route>
                        <Route path={'/albums'}><Albums/></Route>


                    </Switch>
                </Provider>
            </Router>
        </div>
    );
}

export default App;
