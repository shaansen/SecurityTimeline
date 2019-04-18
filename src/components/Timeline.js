import React, { Component } from 'react';

class Timeline extends Component {
    
    handleTimeClick(e) {
        this.props.handleTimeClick(e.target.value)
    }

    render() {
    const { listOfTimes, activeTime } = this.props;
    return listOfTimes.map((time, i) => {
      const activeClass = activeTime === i ? 'btn-primary' : '';
      return (
         <button
            value={i}
            key={i}
            className={'btn ' + activeClass}
            onClick={e => this.handleTimeClick(e)}
          >
            {time.time}
          </button>
      );
    });
  }
}

export default Timeline;
