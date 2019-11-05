import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';
import Vivus , { EASE } from 'vivus';
import logo_img from '../../../images/sub-logo@3x.png';

@connect((state , ownProps ) => ({global:state.global}))
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators( actions , props.dispatch );
    this.state = {
      isAnimateFinished: false,
      isArrowFinished: false
    };
  }

  componentWillMount() {}

  _animationCallback() {

    if (!this.state.isAnimateFinished){
      const animate = new Vivus( 'archer-logos', {
          type: 'delayed',
          duration: 400,
          animTimingFunction: EASE,
          reverseStack: false
      },()=>{
        // if(!this.state.isAnimateFinished){
          this.setState({ isAnimateFinished: true });
        //   animate.play(-1)
        // }else{
          animate.stop();
        //   this.setState({ isAnimateFinished: (!this.state.isAnimateFinished) });
        //   animate.play(1)
        // animate.play(1)
      });
    }



  }

  componentDidMount(){
    this._animationCallback();
  }

  // componentWillUpdate ( _ , nextState ){
  //   ( this.state.isAnimateFinished !== nextState.isAnimateFinished ) && this._animationCallback();
  // }

  render() {
    const fillClasses = `${( this.state.isAnimateFinished === true ) ? 'finished' : '' }`

    return (
      <div className="landing-screen">
        <div >
          <img src={logo_img} width="30%"/>
          <svg id="archer-logos">
            <g id="Desktop-Main" transform="translate(-649.000000, -415.000000)">
              <g id="Group-4" transform="translate(649.000000, 415.000000)">
                <g id="archer-logo">
                  <path id="Fill-2" fill="transparent" d="M34.1,1.5H33L0.3,80.1h0.9c0.4,0,0.7-0.2,0.8-0.6l10.6-25.4l0,0l0.8-2l0-0.1l0.6-1.5l0,0
                    L32.7,5.7c0.4-0.8,0.6-1.5,0.9-2.3c0.3,0.8,0.5,1.5,0.9,2.3l19.3,46.4h0l1.3,3l0,0l10.1,24.3c0.1,0.4,0.3,0.6,0.7,0.6h1
                    L34.1,1.5z" stroke="rgba(34, 31, 32, 0.5)"/>
                  <path id="Fill-4" fill="transparent" d="M140.8,43.6c-0.6-0.7-1.2-1.2-1.9-1.5c15.1-0.3,25.4-8.2,25.4-21c0-13.5-9.1-19.6-25.4-19.6
                    h-18.1v17.2h1.3V2.7h16.8c15.5,0,24.1,5.7,24.1,18.5c0,12.3-9.7,19.9-25.1,19.9h-15.8V23.1h-1.3v57h1.3V42.2h12.2
                    c3.1,0,4,0.4,5.4,2L169,79.4c0.6,0.7,0.8,0.7,1.5,0.7h0.9L140.8,43.6z" stroke="rgba(34, 31, 32, 0.5)"/>
                  <path id="Fill-6" fill="transparent" d="M592.4,43.6c-0.6-0.7-1.2-1.2-1.9-1.5c15.1-0.3,25.4-8.2,25.4-21c0-13.5-9.1-19.6-25.4-19.6
                    h-18.1v17.2h1.3V2.7h16.8c15.5,0,24.1,5.7,24.1,18.5c0,12.3-9.7,19.9-25.1,19.9h-15.8V23.1h-1.3v57h1.3V42.2h12.2
                    c3.1,0,4,0.4,5.4,2l29.3,35.2c0.6,0.7,0.8,0.7,1.5,0.7h0.9L592.4,43.6z" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-8" fill="transparent" points="473.6,78.8 473.6,62.3 472.3,62.3 472.3,80.1 518,80.1 518.1,78.8" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-10" fill="transparent" points="473.6,18.8 473.6,2.8 518,2.8 518,1.5 472.3,1.5 472.3,18.8" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-12" fill="transparent" points="511.3,39.6 473.6,39.6 473.6,23.1 472.3,23.1 472.3,58 473.6,58 473.6,40.8 511.3,40.8" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-14" fill="transparent" points="417.3,31 418.7,31 418.7,1.5 417.3,1.5" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-16" fill="transparent" points="417.3,80.1 418.7,80.1 418.7,49.7 417.3,49.7" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-17" fill="transparent" points="418.7,45.4 418.7,35.3 417.3,35.3 417.3,39.6 362.3,39.6 362.3,35.3 360.9,35.3 360.9,45.4 362.3,45.4 362.3,40.8 417.3,40.8 417.3,45.4" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-18" fill="transparent" points="360.9,31 362.3,31 362.3,1.5 360.9,1.5" stroke="rgba(34, 31, 32, 0.5)"/>
                  <polygon id="Fill-19" fill="transparent" points="360.9,80.1 362.3,80.1 362.3,49.7 360.9,49.7" stroke="rgba(34, 31, 32, 0.5)"/>
                  <path id="Fill-20" className={ fillClasses } fill="transparent" d="M266.5,82.6c-6,0-12-1.3-17.6-4c-20.5-9.7-29.3-34.4-19.6-54.9C239,3.1,263.6-5.7,284.1,4.1
                    c8.2,3.9,14.7,10.1,18.9,18.1c0.2,0.4,0,0.8-0.3,1c-0.3,0.2-0.8,0-1-0.3c-4-7.7-10.3-13.8-18.2-17.5c-19.8-9.4-43.5-0.9-52.9,19
                    c-9.4,19.9-0.9,43.6,18.9,53c9.6,4.5,20.4,5.1,30.4,1.5c10-3.6,18-10.9,22.5-20.5c1-2,1.8-4.2,2.4-6.3c0.1-0.4,0.5-0.6,0.9-0.5
                    c0.4,0.1,0.6,0.5,0.5,0.9c-0.6,2.2-1.4,4.4-2.4,6.6c-4.7,10-13,17.5-23.3,21.2C275.8,81.8,271.2,82.6,266.5,82.6" stroke="rgba(34, 31, 32, 1.0)"/>
                  <path id="Fill-21" className={ fillClasses } fill="transparent" d="M303.5,26.9c0.3-0.5,0.9-0.8,1.5-0.5c0.5,0.3,0.8,0.9,0.5,1.5c-0.3,0.5-0.9,0.8-1.5,0.5 C303.4,28.1,303.2,27.5,303.5,26.9" stroke="rgba(34, 31, 32, 1.0)"/>
                  <path id="Fill-22" className={ fillClasses } fill="transparent" d="M251,40.1c0.1-1.8,0.6-3.6,1.4-5.4c1.8-3.8,4.9-6.6,8.8-8s8.1-1.2,11.9,0.6
                    c3.8,1.8,6.6,4.9,8,8.8c0.5,1.3,0.7,2.6,0.8,4h1.4c-0.1-1.5-0.4-3-0.9-4.4c-1.5-4.3-4.6-7.7-8.7-9.7c-4.1-1.9-8.7-2.2-13-0.6
                    c-4.3,1.5-7.7,4.6-9.6,8.8c-0.9,1.9-1.4,4-1.5,6H251z" stroke="rgba(34, 31, 32, 1.0)"/>
                  <path id="Fill-23" className={ fillClasses } fill="transparent" d="M281.9,43.6c-0.2,1.5-0.6,3-1.3,4.4c-1.8,3.8-4.9,6.6-8.8,8c-3.9,1.4-8.1,1.2-11.9-0.6
                    c-4.9-2.3-8-6.9-8.7-11.9h-1.4c0.7,5.5,4.1,10.6,9.5,13.2c2.3,1.1,4.8,1.6,7.3,1.6c1.9,0,3.9-0.3,5.7-1c4.3-1.5,7.7-4.6,9.6-8.8
                    c0.8-1.6,1.2-3.3,1.4-5H281.9z" stroke="rgba(34, 31, 32, 1.0)"/>
                </g>
              </g>
            </g>
            </svg>
          <h3>DESIGN SOLUTIONS WITH BITS AND PIXELS</h3>
        </div>
      </div>
    );
  }
}
