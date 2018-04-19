import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SiteBanner from '../components/SiteBanner';
import BackToTop from '../components/BackToTop';
import { siteMetadata } from '../../gatsby-config.js';
import './index.css';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    console.log('%cHello!😄', 'color: #62d9fb; font-size: 100px;');
    console.group('%c[SPECIAL INVITES]', 'color: #40c0fb; font-size: 1.5em;');
    console.log('%cSince you\'re here. Here\'re some quick invite links.', 'font-size: 1.2em;');
    console.log('%c[Bastion HQ]: %chttps://discord.gg/fzx8fkt', 'color: #62d9fb; font-size: 1.2em;', 'font-size: 1.2em;');
    console.log('%c[Invite Bastion]: %chttps://discordapp.com/oauth2/authorize?client_id=267035345537728512&scope=bot&permissions=2146958463', 'color: #62d9fb; font-size: 1.2em;', 'font-size: 1.2em;');
    console.groupEnd();
  }

  render() {
    return (
      <root>
        <Helmet
          title={ siteMetadata.title }
          meta={[
            {
              name: 'twitter:title',
              property: 'og:title',
              content: siteMetadata.title
            },
            {
              name: 'description',
              content: siteMetadata.description
            },
            {
              name: 'twitter:description',
              property: 'og:description',
              content: siteMetadata.description
            },
            {
              name: 'twitter:image',
              property: 'og:image',
              content: siteMetadata.image
            }
          ]}
        />

        <Header />
        <main>
          { this.props.children() }
        </main>
        <Footer />
        <SiteBanner />
        <BackToTop />
      </root>
    );
  }
}

export default DefaultLayout;
