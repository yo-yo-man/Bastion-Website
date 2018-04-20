import React from 'react';
import SiteHead from '../../components/SiteHead';
import ExternalLink from '../../components/ExternalLink.js';
import meta from './meta.json';
import tools from './tools.json';
import './index.css';

class ToolsPage extends React.Component {
  render() {
    return (
      <div id='tools'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Tools</h1>
          <p>Some very useful tools that can be used with Bastion.</p>
        </div>

        <div className='container'>
          {
            tools.map((tool, i) => {
              return (
                <div className='tool' key={ i }>
                  <ExternalLink to={ tool.url }>
                    <div className='image'>
                      <img src={ tool.image } alt='Tool Logo' />
                    </div>
                    <div className='details'>
                      <h4>{ tool.title }</h4>
                      <p>{ tool.description }</p>
                    </div>
                  </ExternalLink>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ToolsPage;
