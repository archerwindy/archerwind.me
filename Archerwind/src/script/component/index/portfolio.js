import React, { Component } from 'react';
import { Link } from 'react-router';
import img_1 from '../../../images/giftpack.png';
import img_2 from '../../../images/square-giftpacker.png';
import img_3 from '../../../images/dailybin.png';
import img_4 from '../../../images/iiShare.png';
import img_5 from '../../../images/pak.png';
import img_6 from '../../../images/fb-motion.png';

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
        <div className="project-inner-wrapper">
          <div className="project-item">
            <a href="./project/giftpack">
              <div className="item-images">
                <img src={img_1}/>
                <div className="item-images-overlay giftpack"/>
              </div>
              <div className="item-info">
                <span className="title">GIFTPACK</span>
                <span className="content">A special way to give, a meaningful way to receive.</span>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a href="./project/giftpacker">
              <div className="item-images">
                <img src={img_2}/>
                <div className="item-images-overlay packer"/>
              </div>
              <div className="item-info">
                <span className="title">GIFTPACKER</span>
                <span className="content">Optimize the  delivery, change the way it used to be. </span>
              </div>
            </a>
          </div>


          <div className="project-item">
            <a href="./project/dailybin">
              <div className="item-images">
                <img src={img_3}/>
                <div className="item-images-overlay daily"/>
              </div>
              <div className="item-info">
                <span className="title">DAILYBIN</span>
                <span className="content">Every tiny step is able to give a better earth.</span>
              </div>
            </a>
          </div>


          <div className="project-item">
            <a href="./project/iishare">
              <div className="item-images">
                <img src={img_4}/>
                <div className="item-images-overlay iishare"/>
              </div>
              <div className="item-info">
                <span className="title">IISHARE</span>
                <span className="content">An economic way to live, a profitable way to share.</span>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a href="./project/photography">
              <div className="item-images">
                <img src={img_5}/>
                <div className="item-images-overlay pak"/>
              </div>
              <div className="item-info">
                <span className="title">PAK TRAILER</span>
                <span className="content">Every girl deserve to shine. A visual designer from Thailand.</span>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a href="./project/motion">
              <div className="item-images">
                <img src={img_6}/>
                <div className="item-images-overlay motion"/>
              </div>
              <div className="item-info">
                <span className="title">FB MOTION</span>
                <span className="content">8 valuable statistic numbers of facebook 2015.</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
