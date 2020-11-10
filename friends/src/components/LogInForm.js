import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from 'axios';

const LogInForm = () => {
    //Set initial state
    const [loginInfo, setLoginInfo] = useState({username: '', password: ''});
    const history = useHistory();

    //Handle form changes
    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    };

    //Handle login
    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth.post('http://localhost:5000/api/login', loginInfo)
          .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            history.push('/friendslist');
          })
      };

    return(
        <form onSubmit={handleLogin}>
            <label>Username&nbsp;
                <input
                    type="text"
                    name="username"
                    value={loginInfo.username}
                    onChange={handleChange}
                />
            </label>
            <label>Password&nbsp;
                <input
                    type="password"
                    name="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default LogInForm;
