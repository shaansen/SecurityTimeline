import React, { Component } from 'react';
import { content } from './content';
// import SubContent from './SubContent';
import VisibilitySensor from 'react-visibility-sensor';
import SubContent from './SubContent';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getElement: null,
      activeID: null
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        getElement: document.getElementById('sample'),
        activeID: 0
      };
    });
  }

  renderHeader() {

    const pills = content.map((c, i) => {
      const activeClass = this.state.activeID == i ? "active" : "";
      console.log(this.state.activeID, i, activeClass)
      return <li key={i} className={"nav-item "+activeClass}>
        <a className="nav-link" href={'#' + c.period}>
          {c.period}
        </a>
      </li>
    });

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <a className="navbar-brand" href="/">
          Security Timeline
        </a>
        <ul className="nav nav-pills">{pills}</ul>
      </nav>
    );
  }

  onChange = (isVisible,id) => {
    if(isVisible) {
      this.setState({
        activeID: id
      });
    }    
  };

  renderContent() {
    var containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null;

    return content.map((c, i) => {
      return containmentDOMRect ? (
        <VisibilitySensor
          key={i}
          containment={containmentDOMRect}
          onChange={(e) => this.onChange(e,i)}
        >
          {({ isVisible }) => {
            return <SubContent content={c} />;
          }}
        </VisibilitySensor>
      ) : null;
    });
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
