import React from 'react';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../../gatsby-config.js';

class Head extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Helmet
        defaultTitle={ siteMetadata.title }
        titleTemplate='%s - The Bastion Bot'
        title={ this.props.title }
        meta={[
          {
            name: 'twitter:title',
            property: 'og:title',
            content: this.props.title || siteMetadata.title
          },
          {
            name: 'description',
            content: this.props.description || siteMetadata.description
          },
          {
            name: 'twitter:description',
            property: 'og:description',
            content: this.props.description || siteMetadata.description
          },
          {
            name: 'twitter:image',
            property: 'og:image',
            content: this.props.image || siteMetadata.image
          }
        ]}
      />
    );
  }
}

export default Head;
