import React , { Component } from 'react';
import Jumbotron from '../Components/Jumbotron.js';
import '../Components/Jumbotron.css';

class Header extends Component {
    render() {
        return (
          <header class="bg-primary text-white">
            < Jumbotron title = "Welcome" subtitle="This is subtitle" />
          </header>
            );
    }
}

export default Header;