import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../project/project-navi';
import Project_IMG from '../../../images/giftpack-hero@2x.png';
import img_1 from '../../../images/giftpack-icon@3x.png';
import img_2 from '../../../images/giftpack-design-1@3x.png';
import img_3 from '../../../images/giftpack-design-2@3x.png';
import img_4 from '../../../images/giftpack-design-3@3x.png';
import img_5 from '../../../images/case-study@3x.png';
import img_6 from '../../../images/apple-store@3x.png';
import img_7 from '../../../images/giftpack-design-4@3x.png';
import img_8 from '../../../images/giftpack-design-5@3x.png';
import separator from '../../../images/separator-bird@3x.png';
import ui_1 from '../../../images/gif/giftpack-gif-1.gif';
import ui_2 from '../../../images/gif/Giftpack-Picker-Gif.gif';
import ui_3 from '../../../images/gif/Giftpack-Main-Gif.gif';
import ui_4 from '../../../images/gif/Giftpack-ApplePay-Gif.gif';
import ui_5 from '../../../images/giftpack-user-flow.png';
import ui_6 from '../../../images/giftpack-wireframe.png';

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
            <div className="project-title">GIFTPACK</div>
            <div className="project-desc">A special way to give, a meaningful way to receive</div>
            <img className="hero-image" src={Project_IMG} width="100%"/>
            <div className="project-content">
              <div className="content-row">
                <div className="content-section">
                  <h3>PROBLEM</h3>
                  <p>Long distance relationship is always painful because people cannot touch or feel each other. Not just for couples, families, friends and also business. So I want to create something that not just on the screen but can let people feel each other.</p>
                </div>
                <div className="content-section">
                  <h3>SOLUTION</h3>
                  <p>Integrate online to offline service with local stores and computer software, people can order a gift with text message, voice mail or even video recording. Our packers will help people to deliver the gift to people's special one in few hours.</p>
                </div>
                <div className="content-section">
                  <h3>DIFFICULTY</h3>
                  <p>Not just software part, how to recruit packers who can delivery for me and also to connect with stores to make this kind of O2O service work. Another thing is the marketing, target audience of Giftpack is not local people but someone in other cities.</p>
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
                  Long distance relationships are really painful and easy to lose each other. I want to have something that is not just on the screen. Touchable and warm. Giftpack is a cross countries and cross cities gift delivery service. No matter where in the world, you can treat a gift to the cities that Giftpack covers. The delivery guys will send the gifts directly to people’s special one. Have someone in your mind? Make a meaningful treat right now.
                </div>
              </div>

              <div className="project-title">DESIGN</div>
              <div className="project-desc design-title">Features that unique enough to be highlighted </div>             

              <div className="content-group feature-3">
                <div className="project-info-content">
                  <div className="title">UNBOXING</div>
                  <div>One of the special concepts of Giftpack is unboxing. When people start a journey in our app, they can use the swipe gesture to open the features which has a feeling of surprise. I want to keep the concept that every treat is meaningful and should be surprised to anyone who receives the gifts and the messages.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_7} width="100%"/>
                </div>
              </div>

               <div className="content-group feature-2">                
                <div className="project-info-content">
                  <div className="title">THERMOMETER</div>
                  <div>This feature is so annoy but fun. If people treat someone once, their avatar will display on the history menu. But, if they do not keep sending them gifts once a week, the opacity of avatar will keep decreasing to tell them that someone is being ignore now which gives them a passion to keep it alive.</div>
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
                  <div className="title">PICKER DESIGN</div>
                  <div>In recent days, the interaction to complete a task should be like no-brainer which means so easy to tap. How to make connections between gifts and people? How to make everything simple but still complicate enough to get the information I want? Those are interesting challenges.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_2} width="100%"/>
                </div>
              </div>

              <div className="content-group feature-3">
                <div className="project-info-content">
                  <div className="title">UX OF NOTIFICATION</div>
                  <div>The experience design of notification is a very challenge part to stay tune with our users. When people treat someone a gift, their mood should like posting a facebook article. They want to keep track on it and care about the comments from the others. Notifications should not just show a message, they can have emojis, graphic and the design of timing.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_3} width="100%"/>
                </div>
              </div>


              <div className="content-group feature-4">
                <div className="project-info-content giftpack-4">
                  <div className="title">EMOTION OF TREATING</div>
                  <div>How to make user feels like they are doing a meaningful thing? Every step contains the ingredient that tells user of the importance of what they are doing. Write the word that counts. Pick the gifts with receiver’s face. Make this treat big and special.</div>
                </div>
                <div className="project-info-images">
                  <img src={img_4} width="90%"/>
                </div>
              </div>

              <div className="download-area">
                <a href="#" target="_blank"><img src={img_5} width="13%"/></a>
                <a href="https://itunes.apple.com/us/app/giftpack/id1207605845?ls=1&mt=8" target="_blank"><img src={img_6} width="15%"/></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
