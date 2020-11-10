import React from 'react';

const Home = (props) => {
    props.isLoggedIn(false);
    return(
        <div>
            <h2>Welcome to Friendster</h2>
            <p>Please Log in</p>
        </div>
    )
}

export default Home;