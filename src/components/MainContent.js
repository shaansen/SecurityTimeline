import React, { Component } from 'react';
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

  renderContent() {
    return content.map((c, i) => <SubContent key={i} content={c} />);
  }

  renderPills() {
    const pills = content.map(c => (
      <li class="nav-item">
        <a class="nav-link" href={'#' + c.period}>
          {c.period}
        </a>
      </li>
    ));

    return <ul class="nav nav-pills">{pills}</ul>;
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
          <a class="navbar-brand" href="/">
            Security Timeline
          </a>
          {this.renderPills()}
        </nav>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Header;
