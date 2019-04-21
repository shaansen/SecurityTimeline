import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import VisibilitySensor from 'react-visibility-sensor';

class SubContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getElement: null,
      activeItem: null
    };
  }

  onChange(isVisible, activeItem) {
    const { changeActiveId } = this.props;
    if (isVisible) {
      changeActiveId(activeItem);
    }
  }

  render() {
    var containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null;

    const { content, index } = this.props;
    return (
      <Container fluid className="maincontent" id={content.title}>
        <Row>
          <Col sm>
            <div className="image-container">
              <img
                className="object-fit_cover"
                src={content.img}
                alt={content.title}
              />
            </div>
          </Col>
          <Col sm>
            <VisibilitySensor
              key={index}
              value={index}
              containment={containmentDOMRect}
              onChange={e => this.onChange(e, index)}
            >
              {({ isVisible }) => {
                return (
                  <h1 className="subcontent-header">
                    {content.period} : {content.title}
                  </h1>
                );
              }}
            </VisibilitySensor>

            <h3 className="general-header">Description</h3>
            <p>{content.description}</p>
            <h3 className="general-header">Implication</h3>
            <p>{content.implication}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubContent;
