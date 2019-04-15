import React, { Component } from 'react';

class SubContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm sub-container">
            <img src={content.img} />
          </div>
          <div className="col-sm sub-container">
            <h1>
              {content.period} : {content.title}
            </h1>
            <h3>Description</h3>
            <p>{content.description}</p>
            <h3>Implication</h3>
            <p>{content.implication}</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default SubContent;
