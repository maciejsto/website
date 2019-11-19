import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
    constructor(props){
      super(props);
      this.toggleNavBar = this.toggleNavBar.bind(this);
      this.state = {
        collapsed: true,
      };
    }
    toggleNavBar(){
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    render(){
        
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler collapsed' : 'navbar-toggler'; 
        
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container">
              <Link 
                className="navbar-brand js-scroll-trigger" 
                to="homepage"
                href="/homepage"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500} 
              >Welcome Page </Link>
              <button onClick={this.toggleNavBar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="container">
                <div className={`${classOne}`} id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link
                        onClick={this.toggleNavBar} className={`${classTwo}`} 
                        className="nav-link js-scroll-trigger" 
                        to="about"
                        href="/onas"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                      >O Nas</Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        onClick={this.toggleNavBar} className={`${classTwo}`}  
                        className="nav-link js-scroll-trigger" 
                        to="services"
                        href="/uslugi"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                      >Usługi</Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        onClick={this.toggleNavBar} className={`${classTwo}`}  
                        className="nav-link js-scroll-trigger" 
                        to="contact"
                        href="/kontakt"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500} 
                      >Kontakt</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>  
        );
    }
}

export default NavBar;
