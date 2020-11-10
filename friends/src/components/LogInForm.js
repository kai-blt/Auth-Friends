import React, { useState } from 'react';


const LogInForm = () => {
    //Set initial state
    const [loginInfo, setLoginInfo] = useState({username: '', password: ''});


    //Handle form changes
    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form>
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
