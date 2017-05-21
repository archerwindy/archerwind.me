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
import img_7 from '../../../images/giftpacker-design-4@3x.png';
import img_8 from '../../../images/giftpacker-design-5@3x.png';
import separator from '../../../images/separator-bird@3x.png';
import ui_1 from '../../../images/gif/giftpack-gif-1.gif';
import ui_2 from '../../../images/giftpack-ui-2@3x.png';
import ui_3 from '../../../images/giftpack-ui-3@3x.png';
import ui_4 from '../../../images/giftpack-ui-4@3x.png';

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

              <div className="content-row">
                <div className="content-section">
                  <h3>PROBLEM</h3>
                  <p>Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing.</p>
                </div>
                <div className="content-section">
                  <h3>SOLUTION</h3>
                  <p>Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing.</p>
                </div>
                <div className="content-section">
                  <h3>DIFFICULTY</h3>
                  <p>Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing.</p>
                </div>
              </div>
              <div className="separator bird">
                <img src={ separator } width="100%" />
              </div>              

              <div className="project-intro">CONCEPT</div>
              <div className="content-group feature-1">
                <div className="project-info-images">
                  <img src={img_1} width="273"/>
                  <span className="img-desc">App Icon Design</span>
                </div>
                <div className="project-info-content">
                  Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing. Compare to all the market delivery apps, I start a new journey to build a extremely packer friendly mobile application to optimize the delivery task flow.
                </div>
              </div>

              <div className="project-title">DESIGN</div>
              <div className="project-desc design-title">Features that unique enough to be highlighted </div>             

              <div className="content-group feature-3">
                <div className="project-info-content">
                  <div className="title">GESTURES IN MOVE</div>
                  <div>The experience design of notification is a very challenge part to stay tune with our users. When people treat someone a gift, their mood should like posting a facebook article. They want to keep track on it and care about the comments from the others. Notifications should not just show a message, they can have emojis, graphic and the design of timing.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_7} width="100%"/>
                </div>
              </div>

               <div className="content-group feature-2">                
                <div className="project-info-content">
                  <div className="title">LEVEL SYSTEM</div>
                  <div>In recent days, the interaction to complete a task should be like no-brainer which means so easy to tap. How to make connections between gifts and people? How to make everything simple but still complicate enough to get the information I want? Those are interesting challenges.</div>
                </div>
                <div className="project-info-images">
                  <br />
                  <img src={img_8} width="100%"/>
                </div>
              </div>

              <div className="ui-demo-section">
                <div className="ui-demo"><img src={ ui_1 } width="100%"/></div>
                <div className="ui-demo"><img src={ ui_2 } width="100%"/></div>
                <div className="ui-demo"><img src={ ui_3 } width="100%"/></div>
                <div className="ui-demo"><img src={ ui_4 } width="100%"/></div>
              </div>

              <div className="project-title">KEY TAKEAWAY</div>
              <div className="project-desc">Experiences and things that I learned in the project</div>

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
