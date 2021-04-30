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

let [counter,doSomething]=useState(0);
    const incrementCounter=()=>{
        ++counter
    doSomething(counter)
    }
    const decrementCounter=()=>{
        --counter
    doSomething(counter)
    }
    const reset=()=>{
        counter=0
    doSomething(counter)
    }

    return (
        <div className="App">

            {users.map((value, index)=>
                <User key={index}
                    {...value}/>
            )}
            <button onClick={deleteUser}>Delete</button>


            <div>{counter}</div>
            <button onClick={incrementCounter}>Inc</button>
            <button onClick={decrementCounter}>Decr</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default App;
