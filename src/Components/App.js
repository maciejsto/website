import React from 'react';
import { BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';
import Header from '../Components/Header.js';
import HomePage from '../Components/HomePage.js';
import About from '../Components/About.js';
import Services from '../Components/Services.js';
import Contact from '../Components/Contact.js';
import NavBar from './NavBar';
import Footer from '../Components/Footer.js';
import Schowcase from '../Components/Showcase.js';
import '../scrolling-nav.css';
import Showcase from '../Components/Showcase.js';


class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="component">
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <Showcase/>
      <Contact/>
      <Footer/>
      </div>
    </Router>
  );
  }
}

export default App;
