import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';

@connect((state , ownProps ) => ({global:state.global}))
export default class ProjectNavigation extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators( actions , props.dispatch );
    this.state = {};
  }

  componentWillMount() {
  }

  _handleSelect( selectedKey ) {
    switch( selectedKey ) {
      case 0:
        window.location = '../';
        break;
      case 1:
        window.location = './giftpack';
        break;
      case 2:
        window.location = './giftpacker';
        break;
      case 3:
        window.location = './dailybin';
        break;
      case 4:
        window.location = './iishare';
        break;
      case 5:
        window.location = './photography';
        break;
      case 6:
        window.location = './motion';
        break;
    }
  }

  componentDidMount(){}
  render() {
    console.log(this.props.current);
    return (
      <div>
        <ul className="navigation">
          <li className={ `'naviItem' ${( this.props.current === 0 ) ? 'selected': '' }` } onClick={() => this._handleSelect(0)}>HOME</li>
          <li className={ `'naviItem' ${( this.props.current === 1 ) ? 'selected': '' }` } onClick={() => this._handleSelect(1)}>GIFTPACK</li>
          <li className={ `'naviItem' ${( this.props.current === 2 ) ? 'selected': '' }` } onClick={() => this._handleSelect(2)}>GIFTPACKER</li>
          <li className={ `'naviItem' ${( this.props.current === 3 ) ? 'selected': '' }` } onClick={() => this._handleSelect(3)}>DAILYBIN</li>
          <li className={ `'naviItem' ${( this.props.current === 4 ) ? 'selected': '' }` } onClick={() => this._handleSelect(4)}>IISHARE</li>
          <li className={ `'naviItem' ${( this.props.current === 5 ) ? 'selected': '' }` } onClick={() => this._handleSelect(5)}>VIDEO</li>
          <li className={ `'naviItem' ${( this.props.current === 6 ) ? 'selected': '' }` } onClick={() => this._handleSelect(6)}>MOTION</li>
        </ul>
        <div className="mobile-menu-wrapper">
          <ul className="mobile-navigation">
            <li className={ `'naviItem' ${( this.props.current === 0 ) ? 'selected': '' }` } onClick={() => this._handleSelect(0)}>HOME</li>
            <li className={ `'naviItem' ${( this.props.current === 1 ) ? 'selected': '' }` } onClick={() => this._handleSelect(1)}>GIFTPACK</li>
            <li className={ `'naviItem' ${( this.props.current === 2 ) ? 'selected': '' }` } onClick={() => this._handleSelect(2)}>GIFTPACKER</li>
            <li className={ `'naviItem' ${( this.props.current === 3 ) ? 'selected': '' }` } onClick={() => this._handleSelect(3)}>DAILYBIN</li>
            <li className={ `'naviItem' ${( this.props.current === 4 ) ? 'selected': '' }` } onClick={() => this._handleSelect(4)}>IISHARE</li>
            <li className={ `'naviItem' ${( this.props.current === 5 ) ? 'selected': '' }` } onClick={() => this._handleSelect(5)}>VIDEO</li>
            <li className={ `'naviItem' ${( this.props.current === 6 ) ? 'selected': '' }` } onClick={() => this._handleSelect(6)}>MOTION</li>
          </ul>
        </div>
      </div>
    );
  }
}
