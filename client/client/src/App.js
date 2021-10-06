import './App.css';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import {Route,Switch} from "react-router-dom";
import {Navigation} from "./components/Navigation"


function App() {
  return (
    <div>
    <Navigation/>
   
    <Switch>
 
      <Route exact path ="/" component = {Home}/>
      <Route path = "/register" component = {Register}/>
      <Route path = "/login" component = {Login}/>
    </Switch>
    
    </div>
  );
}

export default App;
