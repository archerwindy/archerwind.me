import React, { Component } from 'react';
import { Link } from 'react-router';
import Navigation from './navigation';
import Main from './main';
import Portfolio from './portfolio';
import Skills from './skills';
import Profile from './profile';

import Arrow from './arrow';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: '0%',
      currentSelect: 0
    };
  }

  componentWillMount() {}

  componentDidMount(){}
  render() {
    return (
      <div className="container">
        <div className="video">
          <video autoPlay loop>
            <source src="/assets/Ground-Zero.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className={`bg-overlay ${(this.state.currentSelect === 2) ? 'skill' : '' }`}/>
        <Navigation current={this.state.currentSelect} onClick={(value)=>{
          this.setState( value )}} />
        <div className="main-section-container">
          <div className="wrapper" style={{transform: `translateY(${this.state.currentPosition})` }} >
            <Main />
            <Portfolio/>
            <Skills/>
            <Profile/>
          </div>
        </div>
        <Arrow current={this.state.currentSelect}/>
      </div>
    );
  }
}
