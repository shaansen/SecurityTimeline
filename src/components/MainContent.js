import React, { Component } from 'react';
import { Carousel } from 'antd';
import { content } from './content';
import SubContent from './SubContent';

class Header extends Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  renderCarousel() {
    return content.map((c, i) => {
      return (
        <div key={i}>
          <SubContent content={c} />
        </div>
      );
    });
  }

  render() {
    console.log(content);
    return (
      <Carousel afterChange={this.onChange}>{this.renderCarousel()}</Carousel>
    );
  }
}

export default Header;
