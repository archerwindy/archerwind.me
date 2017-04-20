import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';
import logo from '../../../images/giftpack_generator.png'

@connect((state , ownProps ) => ({global:state.global}))
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators( actions , props.dispatch );
    this._langChange = this._langChange.bind(this);
    this.state = {
      currentLang: 'EN'
    };
  }

  componentWillMount(){
  }

  _langChange(value){
    this.actions.getTranslationPackage(value);
  }

  componentDidMount(){}
  render() {
    // JSON_LANGUAGE_PACKAGE
    const { title , description , documentGroup } = this.props.global.toObject().JSON_LANGUAGE_PACKAGE;
    return (
      <div className="container">
        <div className="hello">
          <img width="200" src={logo} />
          <div>{title}</div>
          <div>{description}</div>
          <a target="_blank" href={documentGroup.link}>{documentGroup.text}</a>
          <div>v1.0.1</div>
          <select className="languageSelect" onChange={(e)=>this._langChange(e.target.value)}>
            <option value="EN">English</option>
            <option value="TW">繁體中文</option>
          </select>
        </div>
      </div>
    );
  }
}
