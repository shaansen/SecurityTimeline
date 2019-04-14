import React, { Component } from 'react';
import { content } from './content';
// import SubContent from './SubContent';
import VisibilitySensor from 'react-visibility-sensor';
import SubContent from './SubContent';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getElemnt: null
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        getElement: document.getElementById('sample')
      };
    });
  }

  renderHeader() {
    const pills = content.map((c, i) => (
      <li key={i} className="nav-item">
        <a className="nav-link" href={'#' + c.period}>
          {c.period}
        </a>
      </li>
    ));

    return <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
    <a className="navbar-brand" href="/">
      Security Timeline
    </a><ul className="nav nav-pills">{pills}</ul></nav>;
  }

  renderContent() {
    var containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null;

    return content.map((c, i) => {
      return containmentDOMRect ? (
        <VisibilitySensor key={i} containment={containmentDOMRect}>
          {({ isVisible }) => {
            if(isVisible)
              console.log(c.title)
            return <SubContent content={c} />;
          }}
        </VisibilitySensor>
      ) : null;
    });
  }

  onChange(isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

  render() {
    return (
      <div className="App">
          {this.renderHeader()}
        <div
          id="sample"
          style={{
            height: 100 + 'vh',
            maxHeight: 100 + 'vh',
            overflowY: 'scroll'
          }}
        >
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Header;
