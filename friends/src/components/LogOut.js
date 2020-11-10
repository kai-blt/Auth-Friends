import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from 'axios';

const LogOut = (props) => {
    const history = useHistory();
    
    props.isLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/');

    return(
        <>       
        </>
    )
}

export default LogOut;
