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
    return content.map((c,i) => <SubContent key={i} content={c} />)
  }
  
  render() {
    return (
      <div>
        <div>"Security Timeline"</div>
        {this.renderContent()}
      </div>
    );
  }
}

export default Header;
