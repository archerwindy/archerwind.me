import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';

@connect((state , ownProps ) => ({global:state.global}))
export default class Indicator extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators( actions , props.dispatch );
    this._langChange = this._langChange.bind(this);
    this.state = {
      currentLang: 'EN'
    };
  }

  componentWillMount() {

  }

  _langChange( value ) {
    this.actions.getTranslationPackage(value);
  }

  componentDidMount(){}
  render() {
    // JSON_LANGUAGE_PACKAGE
    const { title , description , documentGroup } = this.props.global.toObject().JSON_LANGUAGE_PACKAGE;
    return (
      <div className="indicator">
        <div className="nav">
          <div className="indicator-item"></div>
          <div className="indicator-item"></div>
          <div className="indicator-item"></div>
          <div className="indicator-item"></div>
        </div>
      </div>
    );
  }
}
