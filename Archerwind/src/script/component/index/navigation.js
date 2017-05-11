import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';

@connect((state , ownProps ) => ({global:state.global}))
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators( actions , props.dispatch );
    this.state = {};
  }

  componentWillMount() {
  }

  _handleSelect( selectedKey ) {
    this.props.onClick({
      currentPosition: `-${selectedKey * 25}%`,
      currentSelect: selectedKey
    })
  }

  componentDidMount(){}
  render() {
    return (
      <div>
        <ul className="navigation">
          <li className={ `'naviItem' ${( this.props.current === 0 ) ? 'selected': '' }` } onClick={() => this._handleSelect(0)}>HOME</li>
          <li className={ `'naviItem' ${( this.props.current === 1 ) ? 'selected': '' }` } onClick={() => this._handleSelect(1)}>PORTFOLIO</li>
          <li className={ `'naviItem' ${( this.props.current === 2 ) ? 'selected': '' }` } onClick={() => this._handleSelect(2)}>SKILLS</li>
          <li className={ `'naviItem' ${( this.props.current === 3 ) ? 'selected': '' }` } onClick={() => this._handleSelect(3)}>CONTACT</li>
        </ul>
        <div className="mobile-menu-wrapper">
          <ul className="mobile-navigation">
            <li className={ `'naviItem' ${( this.props.current === 0 ) ? 'selected': '' }` } onClick={() => this._handleSelect(0)}>HOME</li>
            <li className={ `'naviItem' ${( this.props.current === 1 ) ? 'selected': '' }` } onClick={() => this._handleSelect(1)}>PORTFOLIO</li>
            <li className={ `'naviItem' ${( this.props.current === 2 ) ? 'selected': '' }` } onClick={() => this._handleSelect(2)}>SKILLS</li>
            <li className={ `'naviItem' ${( this.props.current === 3 ) ? 'selected': '' }` } onClick={() => this._handleSelect(3)}>CONTACT</li>
          </ul>
        </div>
      </div>
    );
  }
}
