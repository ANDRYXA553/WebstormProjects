import './App.css';
import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Details from "./components/details/details";

function App() {
    let [pageNum, setPageNum] = useState(1)

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${pageNum}`).then(value => value.json()).then(value => {

            setUsers(value.data)
        })
    }, [pageNum])


    return (<Router>
            <div className="App">
                <Link to={'/users'}>Users </Link>
                <Route exact path={'/users'}>
                </Route>
                {users.map(item => <>
                        <Link to={`/users/${item.id}`}>
                            <div>{item.id}-{item.first_name}
                            </div>
                        </Link>
                        <Route path={`/users/${item.id}`}><Details item={item}/></Route>
                    </>
                )}
                <button onClick={() => {
                    (pageNum < 3) ? setPageNum(pageNum += 1) : setPageNum(pageNum = 1)

                }}>NEXT
                </button>
                <button onClick={() => {
                    (pageNum > 1) ? setPageNum(pageNum -= 1) : setPageNum(pageNum = 3)
                }}>PREVIOUS
                </button>
            </div>
        </Router>
    );
}

export default App;
