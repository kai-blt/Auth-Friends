import { Switch, Link, Route } from 'react-router-dom';
import LoginForm from './components/LogInForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Switch>
        <Route path="/friendslist">
         <div>Here are the friends</div>
        </Route>
        <Route path="/login">
         <LoginForm />
        </Route>
        <Route path="/">
          <div>You are home</div>
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
