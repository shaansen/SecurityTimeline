import React, { Component } from 'react';

class SubContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <div class="subcontent">
        <h1>{content.period}</h1>
        <h2>{content.title}</h2>
        <h3>Description</h3>
        <p>{content.description}</p>
        <h3>Implication</h3>
        <p>{content.implication}</p>
        <h3>Copyright</h3>
        <p>{content.copyright}</p>
      </div>
    );
  }
}

export default SubContent;
