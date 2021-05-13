import './App.css';
import Posts from "./components/Posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";


function App() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json().then(value => setUsers(value)))

    }, [])

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json().then(value => setPosts(value)))
    }, [])

    let items = [posts, users]
    return (
        <Router>

            <Link to={'/posts'}>Posts</Link><br/>
            <Link to={'/users'}>Users</Link>
            <Switch>
                <Route exact path={'/posts'}><Posts items={items}/></Route>
                <Route exact path={'/users'}><Users items={items}/></Route>
            </Switch>


        </Router>

    )
}

export default App;
