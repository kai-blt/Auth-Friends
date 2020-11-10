import { useState } from 'react'
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home'
import LoginForm from './components/LogInForm';
import LogOut from './components/LogOut';
import FriendsList from './components/FriendsList';
import PrivateRoute from './router/PrivateRoute';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
      <nav>        
        <h1>Friendster</h1>
        {isLoggedIn
          ?  (<><div><Link to='/logout'>Logout</Link></div></>)
          :  (<><div><Link to='/'>Home</Link>&nbsp;<Link to='/login'>Login</Link></div></>)}
      </nav>
      <Switch>
        <PrivateRoute path="/friendslist" component={FriendsList} />
        <Route path="/logout" render={(props) => <LogOut {...props}  isLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" render={(props) => <LoginForm {...props} isLoggedIn={setIsLoggedIn}/>} />
        <Route path="/" render={(props) => <Home {...props} isLoggedIn={setIsLoggedIn}/>} />
      </Switch>      
    </div>
  );
}

export default App;
