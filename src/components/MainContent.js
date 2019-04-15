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
      const activeClass = this.state.activeID === i ? 'btn-primary' : '';
      return (
        <li key={i}>
          <button
            className={'btn ' + activeClass}
            onClick={() => {
              document.getElementById(c.title).scrollIntoView(true);
              this.setState({
                activeID: i
              });
            }}
          >
            {c.period}
          </button>
        </li>
      );
    });

    return (
      <nav className="header navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <a className="navbar-brand" href="/">
          Security Timeline
        </a>
        <div className="timeline">
        <ul className="nav nav-pills">{pills}</ul>
        </div>
      </nav>
    );
  }

  onChange = (isVisible, id) => {
    if (isVisible) {
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
        <div className="main-content"  id={c.title}>
        <VisibilitySensor
          key={i}
          containment={containmentDOMRect}
          onChange={e => this.onChange(e, i)}
        >
          {({ isVisible }) => {
            return <SubContent content={c} />;
          }}
        </VisibilitySensor>
        </div>
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
            height: 90 + 'vh',
            maxHeight: 90 + 'vh',
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
