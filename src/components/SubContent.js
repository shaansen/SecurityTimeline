import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

class SubContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <Container className="maincontent">
        <Row>
          <Col span={12}>
            <div className="image-container">
              <img className="object-fit_cover" src={content.img} />
            </div>
          </Col>
          <Col span={12}>
            <div className="subcontent">
              <h1 className="subcontent-header">
                {content.period} : {content.title}
              </h1>
              <h3 className="general-header">Description</h3>
              <p>{content.description}</p>
              <h3 className="general-header">Implication</h3>
              <p>{content.implication}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubContent;
