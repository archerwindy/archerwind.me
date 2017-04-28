import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/global';
import classnames from 'classnames';

@connect((state , ownProps ) => ({global:state.global}))
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators( actions , props.dispatch );
    this._langChange = this._langChange.bind(this);
    this.state = {
      currentLang: 'EN',
      currentSelect: 1,
    };
  }

  componentWillMount() {

  }

  _handleSelect( selectedKey ) {
    this.setState({
      currentSelect: selectedKey
    });
  }

  _langChange( value ) {
    this.actions.getTranslationPackage(value);
  }

  componentDidMount(){}
  render() {
    let homeClasses = classnames({
        'naviItem' : true,
        'selected' : ( this.state.currentSelect === 1 )
    });

    let portfolioClasses = classnames({
        'naviItem' : true,
        'selected' : ( this.state.currentSelect === 2 )
    });

    let skillClasses = classnames({
        'naviItem' : true,
        'selected'   : ( this.state.currentSelect === 3 )
    });

    let contactClasses = classnames({
        'naviItem' : true,
        'selected'   : ( this.state.currentSelect === 4 )
    });

    return (
      <div className="navigation">
        <li className={ homeClasses } onClick={() => this._handleSelect(1)}>HOME</li>
        <li className={ portfolioClasses } onClick={() => this._handleSelect(2)}>PORTFOLIO</li>
        <li className={ skillClasses } onClick={() => this._handleSelect(3)}>SKILLS</li>
        <li className={ contactClasses } onClick={() => this._handleSelect(4)}>CONTACT</li>
      </div>
    );
  }
}
