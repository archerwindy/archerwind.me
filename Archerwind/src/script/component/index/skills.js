import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount(){
  }

  render() {
    return (
      <div className="skills-screen">
        <div className="skills-wrapper">
          <div className="skills-section des">
            <div className="title">DESIGN</div>
            <div className="content">
              <span>Sketch</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>InDesign</span>
              <span>Premiere</span>
              <span>LogicProX</span>
              <span>AfterEffects</span>
              <span>AffinityDesign</span>
              <span>Audition</span>
              <span>AffinityPhoto</span>
              <span>InVision</span>
              <span>ProtoPie</span>
              <span>Keynote</span>
              <span>Page</span>
              <span>Principle</span>
              <span>Zeplin</span>
              <span>UX Research</span>
              <span>Wireframing</span>
            </div>
          </div>
          <div className="skills-section dev">
            <div className="title">CODING</div>
            <div className="content">
              <span>Swift</span>
              <span>ReactJS</span>
              <span>C / C++</span>
              <span>Javascript</span>
              <span>PHP</span>
              <span>AWS</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Linux</span>
              <span>Postgres</span>
              <span>jQuery</span>
              <span>Git / Github</span>
              <span>HTML / CSS 3</span>
              <span>Sass / Less</span>
              <span>CocoaPod</span>
              <span>Webpack</span>
              <span>Redux</span>
              <span>Moya</span>
              <span>Java</span>
              <span>Perl</span>
              <span>Matlab</span>
              <span>Python</span>
              <span>Flex</span>
              <span>Postman</span>
              <span>Realm</span>
              <span>Xcode</span>
              <span>Bot</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
