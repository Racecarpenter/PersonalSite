import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Home from './Home'
const Header = (props) => {
  return (
  <Router>
   <div>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={AboutMe}/>
      <Route path="/contact" component={Contact}/>
    </div>
   </div>
  </Router>
  )
}
export default Header
