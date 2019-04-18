import React, { Component } from 'react';
import { content } from './content';
// import SubContent from './SubContent';
import VisibilitySensor from 'react-visibility-sensor';
import SubContent from './SubContent';
import Timeline from './Timeline';
import { Navbar } from 'react-bootstrap';

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

  handleTimeClick = index => {
    const c = content[index];
    document.getElementById(c.title).scrollIntoView(true);
    this.setState({
      activeID: index
    });
  };

  renderHeader() {
    const listOfTimes = content.map((c, i) => {
      return { id: i, time: c.period };
    });

    const activeTime = this.state.activeID;

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Security Timeline</Navbar.Brand>
        </Navbar>
        
        <Timeline
          listOfTimes={listOfTimes}
          activeTime={activeTime}
          handleTimeClick={this.handleTimeClick}
        />
      </div>
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
        <div className="main-content" id={c.title} key={i}>
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
