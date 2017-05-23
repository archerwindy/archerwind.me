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
import ui_1 from '../../../images/gif/Giftpacker-Level-Gif.gif';
import ui_2 from '../../../images/gif/Giftpacker-Route-Gif.gif';
import ui_3 from '../../../images/gif/Giftpacker-Task-Gif.gif';
import ui_4 from '../../../images/gif/Giftpacker-Tips-Gif.gif';
import ui_5 from '../../../images/giftpacker-user-flow.png';
import ui_6 from '../../../images/giftpacker-wireframe.png';

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
                  <p>To support the service of Giftpack, I need an app to make our packers to deal with the tasks much easier than ever before. The process must be straight forward, the only thing that packers should care is, find our receiver of these gifts.</p>
                </div>
                <div className="content-section">
                  <h3>SOLUTION</h3>
                  <p>Giftpacker not only puts the routing problem to the server side but also integrate with all the handy data of the stores, real-time traffic with schedulable working time and assignable area. Clear status display, level system to encourage the engagement and more.</p>
                </div>
                <div className="content-section">
                  <h3>DIFFICULTY</h3>
                  <p>The most difficult problem is to give packers the right instruictions when something happens. Giftpack service is not like the original O2O service that someone order the service to theirselve, our customers order our service for someone else. Packer should be able to contact them and complete the task.</p>
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
                  <div>One special thing about user exoerience design is the gestures to change different states. Start with one tap which is pretty straight forward but doent't fit the real situation. After several testing, packers usually change states while moving, so they miss tapping the button all the time. The feedback was "so annoy". Then I tried the second option, swipe. Much better but when packers are on their bike or scooter, they cannot finish the swipe to change the state so are forced to stop and do it again. Finally, I change to double tap that really matches their requirements.</div>
                </div>
                <div className="project-info-images">
                  <br /><br /><br /><br /><br />
                  <img src={img_7} width="100%"/>
                </div>
              </div>              

               <div className="content-group feature-2">                
                <div className="project-info-content">
                  <br /><br />
                  <div className="title">LEVEL SYSTEM</div>                  
                  <div>There are two main reasons to design the level system like playing games. First, the standard to count bonus for packers. Packers deserve awards when they rich some goals that makes them engage more in the process. The second one is the addiction of the game. People love to play games, what if I can integrate that kind of feeling in our delivery task? No just in the profile page, but also everything in the task. Such as if you finish the task within 40 mins, packers would acquire some achievements.</div>
                </div>
                <div className="project-info-images">                  
                  <br /><br />
                  <img src={img_8} width="90%"/>
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
