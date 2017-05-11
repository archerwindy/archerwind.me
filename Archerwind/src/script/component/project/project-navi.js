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
    }
  }

  componentDidMount(){}
  render() {
    return (
      <ul className="navigation">
        <li className={ `'naviItem' ${( this.props.current === 0 ) ? 'selected': '' }` } onClick={() => this._handleSelect(0)}>HOME</li>
        <li className={ `'naviItem' ${( this.props.current === 1 ) ? 'selected': '' }` } onClick={() => this._handleSelect(1)}>GIFTPACK</li>
        <li className={ `'naviItem' ${( this.props.current === 2 ) ? 'selected': '' }` } onClick={() => this._handleSelect(2)}>GIFTPACKER</li>
        <li className={ `'naviItem' ${( this.props.current === 3 ) ? 'selected': '' }` } onClick={() => this._handleSelect(3)}>DAILYBIN</li>
        <li className={ `'naviItem' ${( this.props.current === 3 ) ? 'selected': '' }` } onClick={() => this._handleSelect(4)}>IISHARE</li>
      </ul>
    );
  }
}
