import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
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
      <Container className="maincontent" id={content.title}>
        <div className="image-container">
          <Image src={content.img} alt={content.title} />
        </div>
        <VisibilitySensor
          key={index}
          value={index}
          containment={containmentDOMRect}
          onChange={e => this.onChange(e, index)}
          active={this.props.scrollEnabled}
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
      </Container>
    );
  }
}

export default SubContent;
