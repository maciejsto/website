import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

class HomePage extends Component {
    render() {
        return (
            <div>

                <div className="container">

                  <h2>Welcome Home </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    A deserunt neque tempore recusandae animi soluta quasi? 
                    Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam.
                    Repellat explicabo, maiores!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Omnis optio neque consectetur consequatur magni in nisi, 
                    natus beatae quidem quam odit commodi ducimus totam eum, alias, 
                    adipisci nesciunt voluptate. Voluptatum.
                  </p>
                </div>
            </div>
        )
    }
}

export default HomePage;