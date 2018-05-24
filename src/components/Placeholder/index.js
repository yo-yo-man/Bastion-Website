import React from 'react';
import './index.css';


class TextPlaceholder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span
        className='placeholder text'
        style={{
          width: `calc(100% - ${Math.floor(Math.random() * (parseInt(this.props.maxOffset) - parseInt(this.props.minOffset))) + parseInt(this.props.minOffset)}%)`
        }}
      >
        &ensp;
      </span>
    );
  }
}


export {
  TextPlaceholder
};
