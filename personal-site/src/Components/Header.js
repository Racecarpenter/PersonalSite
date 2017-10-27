import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  History
} from 'react-router-dom';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Home from './Home';
import './Style/Main.css';

const Header = (props) => {
  console.log('props: ', props);
  return (
  <Router>
   <div>
    <nav className="navbar navbar-default">
     <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="links"><Link to="/">Home</Link></li>
          <li className="links"><Link to="/about">About</Link></li>
          <li className="links"><Link to="/contact">Contact</Link></li>
        </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="name">Race Carpenter</li>
          </ul>
      </div>
    </div>
  </nav>
    <div className="main">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
    </div>
   </div>
  </Router>
  )
}
export default Header
