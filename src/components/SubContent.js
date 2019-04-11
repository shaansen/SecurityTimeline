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
              <div className="footer">
                <hr />
                <p className="copyright">{content.copyright}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SubContent;
