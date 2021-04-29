import React from 'react'
 function User(props){
    let {name,age,status}=props;
  return (
      <div>
          {name}
          {age}
          {status}
      </div>
  )

};
 export default User;

