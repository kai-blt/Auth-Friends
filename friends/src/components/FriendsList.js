import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../axios/axiosWithAuth'
import Friend from './Friend';


const baseFriend = {
    id: null,
    name: '',
    age: null,
    email: '',
}


const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(baseFriend);
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


    //handlers
    const handleChange = (e) => {
      const randomId = Math.random() * 100;

      setNewFriend({
        ...newFriend,
        id: randomId, [e.target.name]: e.target.value        
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }

    return(
      <div className="container">
        <div>
            <h1>My Friends</h1>
            {friends
            ? friends.map(friend => <Friend {...friend} />)
            : <div>Please add your friends</div>
            }
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Add Friends</h1>
              <label>Name
                <input
                  type="text"
                  name="name"
                  value={newFriend.name}
                  onChange={handleChange}
                />
              </label>
              <label>Age
                <input
                  type="text"
                  name="age"
                  value={newFriend.age}
                  onChange={handleChange}
                />
              </label>
              <label>Email
                <input
                  type="text"
                  name="email"
                  value={newFriend.email}
                  onChange={handleChange}
                />
              </label>
              <button>Add Friend</button>
          </form>
        </div>
      </div>
    )
}

export default FriendsList;