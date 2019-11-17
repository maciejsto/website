import React , { Component } from 'react';
import Jumbotron from '../Components/Jumbotron.js';
import '../Components/Jumbotron.css';

class Header extends Component {
    render() {
        return (
          < Jumbotron title = "Welcome" subtitle="This is subtitle" />
            );
    }
}

export default Header;