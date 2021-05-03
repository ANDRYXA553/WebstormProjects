import {useEffect, useState} from 'react'
import User from "./user/user";
import axiosInstance from './../axios/axios'
import './user/user.css'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [userAddress, setAddress] = useState(null);
    useEffect(() => {
        axiosInstance.get('/users')
            .then(value => {
                console.log(value)
                setUsers([...value.data])
            })

    }, [])

    const address = (item) => {

        setAddress(item.address)

    }
    console.log(userAddress)

    return (<div className={'main'}>
        <div>{users.map((user) => {
            return <User key={user.id} item={user} address={address}/>
        })}</div>
        <div className={'address'}>
            {userAddress && <h2>{userAddress.city}-{userAddress.street}</h2>}
        </div>
    </div>)

}

