import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {

  const [isUserLog,setUserLog] = useState(false)
  
  return (
    <Router>
    <div className="App">
      <Header/>
      <button onClick={()=> setUserLog(!isUserLog)}> {isUserLog?"Log Out":"Log In"}</button>
    </div>
    <Switch>

      <Route path="/" component={Index} exact/>

      <Route path="/About/:category/:product" component={About}/>

      <Route path="/Profile">
        <Profile  isUserLog={isUserLog}/>
      </Route>

      
    </Switch>
    </Router>
  );
}

export default App;
