import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Row, Col, Timeline, PageHeader } from 'antd';
import { content } from './content';
import SubContent from './SubContent';

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
        <Timeline.Item key={i} onClick={() => this.changeActiveId(i)}>
          <div className={this.state.currentId == i ? 'active' : ''}>
            {c.period}
          </div>
        </Timeline.Item>
      );
    });
  }

  renderContent() {
    return <SubContent content={content[this.state.currentId]} />;
  }

  render() {
    return (
      <div>
        <PageHeader
          title="Security Timeline"
          subTitle="Created by Shantanu Sengupta"
        />
        <Row>
          <Col span={2}>
            <Timeline>{this.renderTimeline()}</Timeline>
          </Col>
          <Col span={22}>{this.renderContent()}</Col>
        </Row>
      </div>
    );
  }
}

export default Header;
