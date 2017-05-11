import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../project/project-navi';
import Project_IMG from '../../../images/giftpacker-hero-big@3x.png';
import img_1 from '../../../images/giftpacker-icon@3x.png';
import img_2 from '../../../images/giftpacker-design-1@3x.png';
import img_3 from '../../../images/giftpacker-design-2@3x.png';
import img_4 from '../../../images/giftpacker-design-3@3x.png';
import img_5 from '../../../images/case-study@3x.png';
import img_6 from '../../../images/apple-store@3x.png';

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
            <div className="project-title">GIFTPACKER</div>
            <div className="project-desc">Make delivery task simple than ever before.</div>
            <img className="hero-image" src={Project_IMG} width="100%"/>
            <div className="project-content">
              <div className="project-intro">STORY & DESIGN</div>
              <div className="content-group feature-1">
                <div className="project-info-images">
                  <img src={img_1} width="273"/>
                  <span className="img-desc">App Icon Design</span>
                </div>
                <div className="project-info-content">
                  Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing. Compare to all the market delivery apps, I start a new journey to build a extremely packer friendly mobile application to optimize the delivery task flow.
                </div>
              </div>

              <div className="content-group feature-2">
                <div className="project-info-content">
                  <div className="title">STATUS CONNECTION</div>
                  <div>The most important thing of the delivery is to tell packers what status they are in. Task is complex with severial stages, so navigation and the buttons are a good way to design for reminding packers where they are with interactions.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_2} width="100%"/>
                </div>
              </div>

              <div className="content-group feature-3">
                <div className="project-info-content">
                  <div className="title">DIRECTION IMPROVEMENT</div>
                  <div>After tons of interview with delivery guys, 95% of them never use the direction feature in the app. They prefer all the other Map applications. So, not just copy the address, out-direct to Map apps, I can let packers contact the store directly with build-in feature. More reliable and handy structure to complete the task.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_3} width="90%"/>
                </div>
              </div>


              <div className="content-group feature-4">
                <div className="project-info-content">
                  <div className="title">PACKER INTERACTION</div>
                  <div>After tons of interview with delivery guys, 95% of them never use the direction feature in the app. They prefer all the other Map applications. So, not just copy the address, out-direct to Map apps, I can let packers contact the store directly with build-in feature. More reliable and handy structure to complete the task.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_4} width="100%"/>
                </div>
              </div>

              <div className="download-area">
                <a href="#" target="_blank"><img src={img_5} width="13%"/></a>
                <a href="https://appsto.re/us/JcoHfb.i" target="_blank"><img src={img_6} width="15%"/></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
