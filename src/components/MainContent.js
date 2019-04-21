import React, { Component } from 'react';
import { content } from './content';
import SubContent from './SubContent';
import { Navbar, Button, Container } from 'react-bootstrap';

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
      <Container fluid className={'timeline-buttons'}>
        {content.map((c, i) => {
          return (
            <Button
              variant={this.state.activeItem === i ? 'primary' : ''}
              id={'tbutton_' + i}
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

  changeActiveId = activeItem => {
    this.setState({ activeItem }, () => {
      const element = document.getElementById(
        content[this.state.activeItem].title
      );
      element.scrollIntoView({
        behavior: 'smooth'
      });
      const button = document.getElementById('tbutton_' + activeItem);
      button.scrollIntoView({ inline: 'center' });
    });
  };

  renderContent() {
    return content.map((c, i) => (
      <SubContent
        key={i}
        content={c}
        index={i}
        changeActiveId={this.changeActiveId}
      />
    ));
  }

  render() {
    return (
      <div>
        <Container fluid className={'navbar'}>
          <Navbar.Brand href="https://shaansen.github.io/SecurityTimeline">Timeline</Navbar.Brand>
          <div className="line"></div>
          {this.renderTimeline()}
        </Container>
        <Container fluid className="content-container">
          {this.renderContent()}
        </Container>
      </div>
    );
  }
}

export default Header;
