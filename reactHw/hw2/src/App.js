import React,{useState} from 'react'

import './App.css';
import User from "./components/userComponent/userComponent";


function App() {
    let usersList = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

    let [users,setUsers]=useState(usersList);

    const deleteUser=()=>{
        users.pop()
        setUsers([...users])
    }

    return (
        <div className="App">

            {users.map((value, index)=>
                <User key={index}
                    {...value}/>
            )}
            <button onClick={deleteUser}>Delete</button>
        </div>
    );
}

export default App;
