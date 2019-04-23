import React, { Component } from 'react';
import { content } from './content';
import SubContent from './SubContent';
import { Navbar, Button, Container } from 'react-bootstrap';

let scrollTimeout = null;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getElement: null,
      activeItem: null,
      scrollEnabled: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      activeItem: 0
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const element = document.getElementById(
        content[this.state.activeItem].title
      );
      element.scrollIntoView({ behavior: 'smooth' });
      this.setState({
        scrollEnabled: true
      });
    }, 1000);
  };

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
              onClick={() => this.scrollToDate(i)}
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

  scrollToDate = activeItem => {
    this.setState({ activeItem: activeItem, scrollEnabled: false }, () => {
      
    });
  };

  changeActiveId = activeItem => {
    this.setState({ activeItem }, () => {
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
        scrollEnabled={this.state.scrollEnabled}
      />
    ));
  }

  render() {
    return (
      <>
        <Container fluid className={'navbar'}>
          <Navbar.Brand href="https://shaansen.github.io/SecurityTimeline">
            Timeline
          </Navbar.Brand>
          {this.renderTimeline()}
        </Container>
        <Container fluid className="content-container">
          {this.renderContent()}
        </Container>
      </>
    );
  }
}

export default Header;
