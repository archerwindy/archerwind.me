import React, { Component } from 'react';
import { Link } from 'react-router';
import profile from  '../../../images/profile@3x.png';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount(){
  }

  render() {
    return (
      <div className="contact-screen">
        <div className="profile-group">
          <div className="profile-picture"> <img src={profile}/> </div>
          <div className="profile-into">
            <div className="profile-name">ARCHER</div>
            <div className="profile-mail">archerwindy@gmail.com</div>
            <div className="social-icon"></div>
          </div>
        </div>

        <div className="profile-intro-content">
            Start as a backend developer since 19 then become a full-stack developer in 2 years. Fall in love with iOS, graphic, UI/UX design. A serial entrepreneur, now is CEO at Giftpack, Inc.
        </div>

        <div className="copyright">
          ALL RIGHTS RESERVED ARCHERWIND 2017
        </div>
      </div>
    );
  }
}
