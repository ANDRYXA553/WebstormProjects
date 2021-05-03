import './App.css';
import React from "react";
import Posts from "./components/posts/posts";
import Users from "./components/users/users"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
            <Router>
                <Link to={'/users2'}>UserList</Link>
                <hr/>
                <Link to={'/posts'}>PostsList</Link>
                <Switch>
                    <Route path={'/users2'} render={()=>(<Users/>)}/>

                    <Route path={'/posts'} render={()=>(<Posts/>)}/>
                </Switch>
            </Router>


    </div>
  );
}

export default App;
