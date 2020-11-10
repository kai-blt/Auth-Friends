import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../axios/axiosWithAuth'
import Friend from './Friend';


const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
          console.log(res)
          setIsLoading(false);
          setFriends(res.data);
        })
        .catch(err => {
          console.log(err.message);
          setIsLoading(false);
        //   setError(err.message);
        });
    }, [])


    return(
        <div>
            Here are your friends
            {friends
            ? friends.map(friend => <Friend {...friend} />)
            : <div>Please add your friends</div>
            }
        </div>
    )
}

export default FriendsList;