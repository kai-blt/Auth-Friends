import React from 'react';
import axiosWithAuth from '../axios/axiosWithAuth'


const Friend = (props) => {
    const { id, name, age, email, setFriends } = props;   

    const unFriend = (e) => {
        e.preventDefault();
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age} Email: {email}</p>
            <button onClick={unFriend}>Unfriend</button>
        </div>
    )
}

export default Friend;