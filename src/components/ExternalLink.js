import React from 'react';

class ExternalLink extends React.Component {
  render() {
    return (
      this.props.to === '#'
      ? <a href='javascript:void(0);'>
          { this.props.children }
        </a>
      : <a href={ this.props.to } target='_blank'>
          { this.props.children }
        </a>
    );
  }
}

export default ExternalLink;
