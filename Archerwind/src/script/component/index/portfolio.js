import React, { Component } from 'react';
import { Link } from 'react-router';
import img_1 from '../../../images/giftpack.png';
import img_2 from '../../../images/square-giftpacker.png';
import img_3 from '../../../images/dailybin.png';
import img_4 from '../../../images/iiShare.png';

export default class Protfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount(){
  }

  render() {
    return (
      <div className="portfolio-screen">

        <div className="project-item">
          <div className="item-images">
            <img src={img_1}/>
            <div className="item-images-overlay packer"/>
          </div>
          <div className="item-info">
            <span className="title">GIFTPACK</span>
            <span className="content">A special way to give, a meaningful way to receive.</span>
          </div>
        </div>

        <div className="project-item">
          <div className="item-images">
            <img src={img_2}/>
            <div className="item-images-overlay giftpack"/>
          </div>
          <div className="item-info">
            <span className="title">GIFTPACKER</span>
            <span className="content">Optimize the  delivery, change the way it used to be. </span>
          </div>
        </div>


        <div className="project-item">
          <div className="item-images">
            <img src={img_3}/>
            <div className="item-images-overlay daily"/>
          </div>
          <div className="item-info">
            <span className="title">DAILYBIN</span>
            <span className="content">A special way to give, a meaningful way to receive.</span>
          </div>
        </div>


        <div className="project-item">
          <div className="item-images">
            <img src={img_4}/>
            <div className="item-images-overlay iishare"/>
          </div>
          <div className="item-info">
            <span className="title">IISHARE</span>
            <span className="content">A special way to give, a meaningful way to receive.</span>
          </div>
        </div>

      </div>
    );
  }
}
