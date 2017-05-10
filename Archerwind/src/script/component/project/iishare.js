import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../index/navigation';
import Project_IMG from '../../../images/iishare-hero@3x.png';
import img_1 from '../../../images/iishare-icon@3x.png';
import img_2 from '../../../images/iishare-design-1@3x.png';
import img_3 from '../../../images/iishare-design-2@3x.png';
import img_4 from '../../../images/giftpacker-design-3@3x.png';

export default class Giftpacker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){}

  componentDidMount(){}
  render() {
    return (
      <div className="portfolio-container">
        {/* <div className="video">
          <video autoPlay loop>
            <source src="/assets/Ground-Zero.mp4" type="video/mp4"/>
          </video>
        </div> */}
        <div className="bg-overlay"/>
        <div className="portfolio-wrapper">
          <Navigation current={this.state.currentSelect} onClick={(value)=>{
            this.setState( value )}} />
          <div className="project-container">
            <div className="project-title">IISHARE</div>
            <div className="project-desc">An economic way to live, a profitable way to share</div>
            <img src={Project_IMG} width="100%"/>
            <div className="project-content">
              <div className="project-intro">STORY & DESIGN</div>
              <div className="content-group feature-1">
                <div className="project-wrapper">
                  <div className="project-info-images">
                    <img src={img_1} width="273"/>
                    <span className="img-desc">App Icon Design</span>
                  </div>
                  <div className="project-info-content">
                    New things are expensive, why not rent from someone else who doesn’t need that right now? Cheap price, extra money, make connection with more people, ensurance care and a happy community. I really cannot find a reason to say no to an app that can let people rent everything from others. This is somethig that can really change what people usually do in their daily life.
                  </div>
                </div>
              </div>

              <div className="content-group feature-2">
                <div className="project-wrapper">
                  <div className="project-info-images">
                    <img src={img_2} width="100%"/>
                  </div>
                  <div className="project-info-content">
                    <div className="title">UX OF SEC-HAND TRADE</div>
                    <div>It’s fun to have experience to know what people care when they rent second-hand stuff from the others. Distance, likes, prices, certifications and so much more. Customize each interface and forms are very important for making this real. It’s also give me a chance to understand the field that I never touch before.</div>
                  </div>
                </div>
              </div>

              <div className="content-group feature-3">
                <div className="project-wrapper">
                  <div className="project-info-content">
                    <div className="title">CATEGORY & FILTER</div>
                    <div>When it comes to a e-commerce site or something like that, I always have to figure out how to find the products I want.  Good filter, search bar and category list are really important to navigate user to where they want. Not just give a list but also icon design, filter function design or advertising design. How to make everything easy to use and attractive? Build a hooked system.</div>
                  </div>
                  <div className="project-info-images">
                    <img src={img_3} 	width="519" height="542"/>
                  </div>
                </div>
              </div>


              <div className="content-group feature-4">
                <div className="project-wrapper">
                  <div className="project-info-content">
                    <div className="title">RENTING ECOSYSTEM</div>
                    <div>People can enter the price and the deposit they want and others can make offers. How about the ensurance? I design a module to fit almost every conditions of different requirements like rates, currency, cultures in different cities. A safe way to get rid of fraud is the most important of iiShare.</div>
                  </div>
                  <div className="project-info-images">
                    <img src={img_4} width="100%"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
