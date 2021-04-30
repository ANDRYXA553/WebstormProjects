import React from 'react'

function User(props) {
    let {name, age, status,func, id} = props;


    return (
        <div >
            <p>{name}--
            {age}
            {status}---
            <button onClick={()=>func(id)}>DELETE</button></p>
        </div>

    )

}
export default User;

