import React, { Component } from 'react';
import Vivus , { EASE } from 'vivus';

export default class Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isArrowFinished: false
    };
    this._arrowCallback = this._arrowCallback.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  componentWillMount() {}

  _arrowCallback() {
    this.setState({
      isArrowFinished: true
    });
  }

  _handleSelect() {
    let selectedKey = this.props.current + 1
    this.props.onClick({
      currentPosition: `-${selectedKey * 25}%`,
      currentSelect: selectedKey
    })
  }

  componentDidMount(){
    //  new Vivus( 'arrow', {
    //     type: 'sync',
    //     duration: 1000,
    //     animTimingFunction: Vivus.EASE,
    // }, this._arrowCallback.bind( this ) );
  }

  render() {
    const arrowClasses = `${( this.state.isArrowFinished ) ? 'finished' : '' }`;
    return (
      <div className={`scroll ${(this.props.current === 3) ? 'fadeOutDown' : 'fadeInDown' } animated arrow-svg`} onClick={() => this._handleSelect()}>
        <svg id="arrow">
          <g id="Desktop-Wireframe">
            <g id="Desktop-Main" transform="translate(-933.000000, -838.000000)">
              <g id="icon-arrow" transform="translate(934.000000, 838.000000)">
                <path id="Line" fill="transparent" className={ arrowClasses } d="M17.5,17.6L0.2,0.2" stroke="rgba(34, 31, 32, 1.0)"/>
                <path id="Line-Copy" fill="transparent" className={ arrowClasses } d="M34.1,17.4L51.4,0" stroke="rgba(34, 31, 32, 1.0)"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
