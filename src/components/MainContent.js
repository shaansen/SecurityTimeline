import React, { Component } from 'react';
import { content } from './content';
import SubContent from './SubContent';
import { Navbar, Button, Container } from 'react-bootstrap';
import VisibilitySensor from 'react-visibility-sensor';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getElement: null,
      activeItem: null
    };
  }

  componentDidMount() {
    this.setState({
      activeItem: 0
    });
  }

  renderTimeline() {
    return (
      <Container className={'timeline-buttons'}>
        {content.map((c, i) => {
          return (
            <Button
              variant={this.state.activeItem === i ? 'primary' : ''}
              key={i}
              value={i}
              onClick={() => this.changeActiveId(i)}
            >
              <div className={this.state.currentId === i ? 'active' : ''}>
                {c.period}
              </div>
            </Button>
          );
        })}
      </Container>
    );
  }

  changeActiveId(activeItem) {
    this.setState({ activeItem }, () => {
      const element = document.getElementById(
        content[this.state.activeItem].title
      );
      element.scrollIntoView();
    });
  }

  onChange(isVisible, activeItem) {
    this.setState(
      {
        activeItem
      },
      () => {
        const element = document.getElementById(
          content[this.state.activeItem].title
        );
        element.scrollIntoView();
      }
    );
  }

  renderContent() {
    var containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null;

    return content.map((c, i) => {
      return (
        <VisibilitySensor
          key={i}
          value={i}
          containment={containmentDOMRect}
          onChange={e => this.onChange(e, i)}
        >
          {({ isVisible }) => {
            return <SubContent content={c} />;
          }}
        </VisibilitySensor>
      );
    });
  }

  render() {
    return (
      <div>
        <Container fluid className={"navbar"}>
          <Navbar.Brand href="/">Security Timeline</Navbar.Brand>
          {this.renderTimeline()}
        </Container>
        <Container className="content-container">
          {this.renderContent()}
        </Container>
      </div>
    );
  }
}

export default Header;
