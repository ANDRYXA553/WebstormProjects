import React, {useState} from 'react'

import './App.css';
import User from "./components/userComponent/userComponent";


function App() {
    let usersList = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false},
        {id: 5, name: 'max', age: 30, status: true},
        {id: 6, name: 'anya', age: 31, status: false},
        {id: 7, name: 'oleg', age: 28, status: false},
        {id: 8, name: 'andrey', age: 29, status: true},
        {id: 9, name: 'masha', age: 30, status: true},
        {id: 10, name: 'olya', age: 31, status: false},
        {id: 11, name: 'max', age: 31, status: true}
    ];
    usersList.map((value, index) => usersList[index].id = index)

    let [counter, doSomething] = useState(0);
    const incrementCounter = () => {
        ++counter
        doSomething(counter)
    }
    const decrementCounter = () => {
        --counter
        doSomething(counter)
    }
    const reset = () => {
        counter = 0
        doSomething(counter)
    }

    let [users, setUsers] = useState(usersList)


    const deleteUS = (id) => {
        const arrWithoutChosenUser = users.filter(user => user.id !== id);
        setUsers(arrWithoutChosenUser)
    }

    return (
        <div className="App">

            {users.map(value => {

                    return <User key={value.id}
                                 {...value} func={deleteUS}/>
                }
            )}


            <div>{counter}</div>
            <button onClick={incrementCounter}>Inc</button>
            <button onClick={decrementCounter}>Decr</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default App;

