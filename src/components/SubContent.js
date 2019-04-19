import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class SubContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <Container className="maincontent" id={content.title}>
        <div className="image-container">
          <img
            className="object-fit_cover"
            src={content.img}
            alt={content.title}
          />
        </div>
        <h1 className="subcontent-header">
          {content.period} : {content.title}
        </h1>
        <h3 className="general-header">Description</h3>
        <p>{content.description}</p>
        <h3 className="general-header">Implication</h3>
        <p>{content.implication}</p>
      </Container>
    );
  }
}

export default SubContent;
