import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../project/project-navi';
import Project_IMG from '../../../images/dailybin-hero@3x.png';
import img_1 from '../../../images/dailybin-icon@3x.png';
import img_2 from '../../../images/dailybin-design-1@3x.png';
import img_3 from '../../../images/dailybin-design-2@3x.png';
import img_4 from '../../../images/dailybin-design-3@3x.png';
import img_5 from '../../../images/case-study@3x.png';
import img_7 from '../../../images/dailybin-design-4@3x.png';
import img_8 from '../../../images/dailybin-design-5@3x.png';
import separator from '../../../images/separator-green@3x.png';
import ui_1 from '../../../images/gif/Dailybin-Variation.gif';
import ui_2 from '../../../images/gif/Dailybin-Main-Gif.gif';
import ui_3 from '../../../images/gif/Dailybin-Donate-Gif.gif';
import ui_4 from '../../../images/gif/Dailybin-Data-Gif.gif';
import ui_5 from '../../../images/dailybin-user-flow.png';
import ui_6 from '../../../images/dailybin-wireframe.png';

export default class Dailybin extends Component {
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
            <div className="project-title">DAILYBIN</div>
            <div className="project-desc">Every tiny step is able to give a better earth</div>
            <img className="hero-image" src={Project_IMG} width="100%"/>
            <div className="project-content">              

              <div className="content-row">
                <div className="content-section">
                  <h3>PROBLEM</h3>
                  <p>In 21 century, environmental problems become more and more popular and lots of people are coming out serveral ways to make our earth better. I want to have some contribution to our planet as well. Find a way to drive people's awareness of how they injure the environment. Even it's simple.</p>
                </div>
                <div className="content-section">
                  <h3>SOLUTION</h3>
                  <p>The answer should be very simple and easy to use to pervade everyone's life. Dailybin is an app to let people collect their gargage virtually when they throw things away. The app will show the statistic numbers and tell people how much hurt our environment. Then bring their awareness to donate.</p>
                </div>
                <div className="content-section">
                  <h3>DIFFICULTY</h3>
                  <p>The biggest problem is the user experience design on the way that people throw trashes. No one would throw and open their smart phone to do such thing. So the design should be work with wearable devices and the trash can be recorded with a twist of people's arm. That was a great experience on user testing.</p>
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
                  San Francisco, the city where I live, is an amazing city that has the highest trash conversion rate in the world. And that reminds me of the damage we give to the earth. I want to create an app can drive people’s awareness of how much they hurt the planet. The app have to be opened several times per day and teach people about the knowledge of how to protect the environment and do something more than that.
                </div>
              </div>

              <div className="project-title">DESIGN</div>
              <div className="project-desc design-title">Features that unique enough to be highlighted </div>             

              <div className="content-group feature-3">
                <div className="project-info-content">
                  <div className="title">SELECTOR</div>
                  <div>In order to design a selector which is easy to use and the most important, fast to interact with. I need to categorize the trashes that people usually generate each day. Create icons for them that should be easy to recognize, swipe gesture is also integrated. One more thing, the voice control with SiriKit. People can ust talk to siri to collect a kind of trash that I list in the app. Fast and easy.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_7} width="100%"/>
                </div>
              </div>

               <div className="content-group feature-2">                
                <div className="project-info-content">
                  <div className="title">STATISTICS</div>
                  <div>According phycology research, people will do some kind of action when they feel guilty. So I use the graphics to show the progress of different categories. The most important feature is to use statistic numbers and translate into the damage of the earth. Like how much inch of the land you already pollute. Guilty to actions.</div>
                </div>
                <div className="project-info-images">
                  <br />
                  <img src={img_8} width="100%"/>
                </div>
              </div>

              <div className="separator">
                <img src={ ui_5 } width="100%" />
                <img src={ ui_6 } width="100%" />
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
                  <div className="title">GESTURE BEHAVIOR</div>
                  <div>Dailybin can let people record the trash they generate each day, so the experience when using the app should be really fast and gesture support. Not pinch but raise the arm with your Apple Watch or your smart phone.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_2} width="100%"/>
                </div>
              </div>

              <div className="content-group feature-3">
                <div className="project-info-content">
                  <div className="title">MARKETING PHYCOLOGY</div>
                  <div>Our goal is to teach people about the environment and do things more than that, Like share, comment, engage or donate. Using the style of comparison to make marketing adversitements is a great challenge of branding and the user research. Green is a color of environment, but what color make people willing to donate their money? Questions like this are the center of this project.</div>
                </div>
                <div className="project-info-images dailybin-3">
                  <img src={img_3} width="100%"/>
                </div>
              </div>


              <div className="content-group feature-4">
                <div className="project-info-content dailybin-4">
                  <div className="title">UX ON APPLE WATCH</div>
                  <div>Apple Watch gives people a new way to interact with electronic devices. Notifications, gestures and shortcuts are the point I use in the interactive design. A new way to make everything fast, easy to use and also modern.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_4} width="100%"/>
                </div>
              </div>

              <div className="download-area">
                <a href="#" target="_blank"><img src={img_5} width="13%"/></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
