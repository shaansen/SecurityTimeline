import React, { Component } from 'react';

class SubContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="maincontent">
            <div className="image-container">
              <img className="object-fit_cover" src={content.img} />
            </div>
            <div className="subcontent">
              <h1 className="subcontent-header">
                {content.period} : {content.title}
              </h1>
              <h3 className="general-header">Description</h3>
              <p>{content.description}</p>
              <h3 className="general-header">Implication</h3>
              <p>{content.implication}</p>
            </div>
          
      </div>
    );
  }
}

export default SubContent;
