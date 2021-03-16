import './styles/styles.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from './pages/home'
import About from './pages/about'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component = { Home } />
        <Route path='/about' exact component = {About} />
      </Switch>
    </Router> 
  );
}

