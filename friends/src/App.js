import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home'
import LoginForm from './components/LogInForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './router/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Switch>
        <PrivateRoute path="/friendslist" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={Home} />
      </Switch>      
    </div>
  );
}

export default App;
