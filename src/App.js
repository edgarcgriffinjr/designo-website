import './styles/styles.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from './pages/home'
import About from './pages/about'
import Web from './pages/webDesign'
import AppPage from './pages/appDesign'
import Graphic from './pages/graphicDesign'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component = { Home } />
        <Route path='/about' exact component = {About} />
        <Route path='/web' exact component = {Web} />
        <Route path='/app' exact component = {AppPage} />
        <Route path='/graphic' exact component = {Graphic} />
      </Switch>
    </Router> 
  );
}

