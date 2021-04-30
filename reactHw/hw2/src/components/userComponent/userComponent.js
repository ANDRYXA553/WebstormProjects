import React from 'react'

function User(props) {
    let {name, age, status,func,index} = props;


    return (
        <div >
            <p>{name}--
            {age}
            {status}---
            <button onClick={()=>func(index)}>DELETE</button></p>
        </div>

    )

}
export default User;

