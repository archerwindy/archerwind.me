import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../project/project-navi';
import Project_IMG from '../../../images/dailybin-hero@3x.png';
import img_1 from '../../../images/fb-1.png';
import img_2 from '../../../images/fb-2.png';
import img_3 from '../../../images/fb-3.png';
import img_4 from '../../../images/fb-4.png';
import img_5 from '../../../images/fb-5.png';
import img_6 from '../../../images/fb-6.png';
import img_7 from '../../../images/fb-7.png';
import img_8 from '../../../images/fb-8.png';
import img_9 from '../../../images/fb-9.png';

export default class Motion extends Component {
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
            <div className="project-title">8 NUMBERS OF FACEBOOK</div>
            <div className="project-desc">Something happens which makes a different world</div>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/rYoPhCouf7U" frameborder="0" allowfullscreen></iframe>
            <div className="project-content">
              <div className="content-row">
                <div className="content-section">
                  <h3>INSPIRATION</h3>
                  <p>Because of the interest of data science and statistic, I love to know the numbers of social media and how these trends influence our world. So I think, if I can share those data to people online that would be a great contribution to do.</p>
                </div>
                <div className="content-section">
                  <h3>CONCEPT</h3>
                  <p>Debating Facebook, Instagram, Pinterest and LinkedIn, I finally decided to go with Facebook which were the largest social networking platform in the world. Their numbers do have a drametic value to reference and help us to understand what is happening in the world.</p>
                </div>
                <div className="content-section">
                  <h3>PROCESS</h3>
                  <p>Began with doing the research online for statistic reports then went on hand-sketching storyboard with three different versions. Use Adobe Illustrator to create all vector resources and put all of them into Adobe After Effects to build the whole film.</p>
                </div>
              </div>                    

              <div className="content-row">
                <div className="content-section">
                  <img src={img_1} width="100%"/>
                </div>
                <div className="content-section">
                  <img src={img_2} width="100%"/>
                </div>
                <div className="content-section">
                  <img src={img_3} width="100%"/>
                </div>
              </div>  
              <div className="content-row">
                <div className="content-section">
                  <img src={img_4} width="100%"/>
                </div>
                <div className="content-section">
                  <img src={img_5} width="100%"/>
                </div>
                <div className="content-section">
                  <img src={img_6} width="100%"/>
                </div>
              </div> 
              <div className="content-row">
                <div className="content-section">
                  <img src={img_7} width="100%"/>
                </div>
                <div className="content-section">
                  <img src={img_8} width="100%"/>
                </div>
                <div className="content-section">
                  <img src={img_9} width="100%"/>
                </div>
              </div> 
            </div>            
          </div>
        </div>
      </div>
    );
  }
}
