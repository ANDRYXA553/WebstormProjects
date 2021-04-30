import React from 'react'

function User(props) {
    let {name, age, status,func,index} = props;


    return (
        <div >
            {name}
            {age}
            {status}
            <button onClick={()=>func(index)}>Delet11e</button>
        </div>

    )

};
export default User;

