import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


class NavBar extends Component {
    render(){
        return (
            <header className="App-header">
              <ul id="headerButtons">
                <a 
                  className="App-link"
                  Link to=""
                  href=""
                  target="blank"
                  rel="noopener noreferrer"
                a>
                Home
                </a>
              </ul>  

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://maciejsto.github.io/website"
          target=""
          rel="noopener noopener"
        >
          About
        </a>
            </header>
        )
    }
}

export default NavBar;
