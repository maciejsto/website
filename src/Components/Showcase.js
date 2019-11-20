import React, { Component } from 'react';
import ShowcaseImg1 from '../images/showcase-1.png';
import ShowcaseImg2 from '../images/showcase-2.png';
import ShowcaseImg3 from '../images/showcase-3.jpg';
import '../Components/Showcase.css';

class Showcase extends Component {
    render() {
      var sectionStyle1 = {
        backgroundImage: `url(${ShowcaseImg1})`
      };

      var sectionStyle2 = {
        backgroundImage: `url(${ShowcaseImg2})`
      };

      var sectionStyle3 = {
        backgroundImage: `url(${ShowcaseImg3})`
      };
        return (
          <div className="container">
                <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row no-gutters">

        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={sectionStyle1}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Psychoterapia Typ1</h2>
          <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img" style={sectionStyle2}></div>
        <div className="col-lg-6 my-auto showcase-text">
          <h2>Psychoterapia Typ2</h2>
          <p className="lead mb-0">Newly improved, and full of great utility classNamees, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={sectionStyle3}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Psychoterapia Typ3</h2>
          <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
      </div>
    </div>
  </section>
  </div>
        );
    }
}

export default Showcase;