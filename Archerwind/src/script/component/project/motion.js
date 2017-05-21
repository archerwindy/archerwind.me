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
            <div className="project-title">8 VALUABLE NUMBERS OF FACEBOOK</div>
            <div className="project-desc">Every tiny step is able to give a better earth</div>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/rYoPhCouf7U" frameborder="0" allowfullscreen></iframe>
            <div className="project-content">
              <div className="content-row">
                <div className="content-section">
                  <h3>INSPIRATION</h3>
                  <p>Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing.</p>
                </div>
                <div className="content-section">
                  <h3>CONCEPT</h3>
                  <p>Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing.</p>
                </div>
                <div className="content-section">
                  <h3>PROCESS</h3>
                  <p>Deliver jobs are not just sending package to others in Giftpack. Our orders are from the world with people’s true words and hearts, you wonna see a sweet smile on their face and feel warm and happy on what you are doing.</p>
                </div>
              </div>                    
            </div>
          </div>
        </div>
      </div>
    );
  }
}
