import React, { Component } from 'react';
import { Row, Col } from 'antd';

class SubContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="maincontent">
        <Row>
          <Col span={12}>
            <div className="image-container">
              <img class="object-fit_cover" src={content.img} />
            </div>
          </Col>
          <Col span={12}>
            <div className="subcontent">
              <h1>{content.period}</h1>
              <h2>{content.title}</h2>
              <h3>Description</h3>
              <p>{content.description}</p>
              <h3>Implication</h3>
              <p>{content.implication}</p>
              <h3>Copyright</h3>
              <p>{content.copyright}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SubContent;
