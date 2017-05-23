import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../project/project-navi';
import Project_IMG from '../../../images/dailybin-hero@3x.png';
import img_1 from '../../../images/pak-1.png';
import img_2 from '../../../images/pak-2.png';
import img_3 from '../../../images/pak-3.png';
import img_4 from '../../../images/pak-4.png';
import img_5 from '../../../images/pak-5.png';
import img_6 from '../../../images/pak-6.png';

export default class Photography extends Component {
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
            <div className="project-title">PAK PANYARAT</div>
            <div className="project-desc">Every girl deserve to shine</div>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/T53-by9yJo0" frameborder="0" allowfullscreen></iframe>
            <div className="project-content">
              <div className="content-row">
                <div className="content-section">
                  <h3>INSPIRATION</h3>
                  <p>Pak is one of my best in San Francisco, with beauty, kind and professional tech skills that most people should envy. But she didn't have enough confidence and faith on herself. So I decided to create a film that can tell her. Pak, you are a wonderful girl who deserves to shine. </p>
                </div>
                <div className="content-section">
                  <h3>CONCEPT</h3>
                  <p>The most attractive element of Pak is her smile. In order to bring her confidence so I picked the epic style background music and had her talked about the reason to become a visual designer. Something that can remind herself how good she is and why in San Francisco.</p>
                </div>
                <div className="content-section">
                  <h3>PROCESS</h3>
                  <p>Started with hand-sketching storyboards for three different versions then went on scheduling time with Pak and making reservation with all the stores and spots we needed. After one and half days shooting and voice recording, Adobe Premiere and Audition gave the result.</p>
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

            </div>
          </div>
        </div>
      </div>
    );
  }
}
