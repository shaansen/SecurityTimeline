import React, { Component } from 'react';
import { content } from './content';
import SubContent from './SubContent';
import { Navbar, Row, Col, Button, Container } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0
    };
  }

  changeActiveId(id) {
    this.setState({
      currentId: id
    });
  }

  renderTimeline() {
    return content.map((c, i) => {
      return (
        <Button key={i} onClick={() => this.changeActiveId(i)}>
          <div className={this.state.currentId == i ? 'active' : ''}>
            {c.period}
          </div>
        </Button>
      );
    });
  }

  renderContent() {
    return <SubContent content={content[this.state.currentId]} />;
  }
  
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Security Timeline</Navbar.Brand>
</Navbar>;
        <Row>
          <Col span={2}>
            <Container>{this.renderTimeline()}</Container>
          </Col>
          <Col span={22}>{this.renderContent()}</Col>
        </Row>
      </div>
    );
  }
}

export default Header;
