import React, { Component } from 'react';
import Img1 from '../images/PersonImage1.jpg';
import Img2 from '../images/PersonImage2.jpg';

class About extends Component {
    render() {
        return (
          <div className="container">
          <section className="about testimonials text-center bg-light">
              <h2 className="mb-5">O Nas</h2>
                <div className="row align-items-center">
                  <div className="col col-md-4 col-lg-3 offset-md-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                      <img className="img-fluid rounded-circle mb-5" src={Img1} alt=""/>
                      <h5>Psycholog1</h5>
                      <p className="font-weight-light mb-0">"krótki opis"</p>
                    </div>
                  </div>
                  <div className="col col-md-4 col-lg-3 offset-md-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                      <img className="img-fluid rounded-circle mb-3" src={Img2} alt=""/>
                      <h5>Psycholog2</h5>
                      <p className="font-weight-light mb-0">"krótki opis"</p>
                    </div>
                  </div>  
                </div>    
          </section>
               </div>
          );
    }
}

export default About;