import React from 'react';
import SiteHead from '../../components/SiteHead';
import meta from './meta.json';
import components from './components.json';
import './index.css';

class BrandingPage extends React.Component {
  render() {
    return (
      <div id='brand'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
        />

        <div className='header'>
          <h1>Branding</h1>
          <p>
            Bastion is a playful and fun brand that does not take itself too
            seriously. That said, we are keen on keeping things quality so if
            you are gonna use our art for something please keep it tasteful and
            send it our way for approval at <a href='mailto:support@bastionbot.org'
            title='Bastion Support'><strong>support@bastionbot.org
            </strong></a> or in the <a href='https://discord.gg/fzx8fkt'
            title='Bastion HQ' target='_blank'><strong>Bastion HQ</strong></a>.
            We will get back to you faster than Ganymede.
          </p>
        </div>

        <div className='container'>
          <div className='brandContent brandLogos'>
            <h3>Our Logo</h3>
            <p>
              Please do not edit, change, distort, recolor, or reconfigure the
              Bastion logo.
            </p>
            <div className='brandLogos-main'>
              {
                components.logos.map((logo, i) => {
                  return (
                    <div className='brandLogo' key={ i } style={{
                      backgroundColor: logo.dark ? 'white' : '#151515',
                      backgroundImage: logo.dark
                        ? 'linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6),linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6)'
                        : 'linear-gradient(45deg,#2e3033 25%,transparent 0,transparent 75%,#2e3033 0,#2e3033),linear-gradient(45deg,#2e3033 25%,transparent 0,transparent 75%,#2e3033 0,#2e3033)',
                      border: `2px solid rgba(${logo.dark ? '0, 0, 0' : '255, 255, 255'}, .05)`
                    }}>
                      <img src={ logo.image } />
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className='brandContent brandColors'>
            <h3>Bastion Colors</h3>
            <p>
              Please use these color scheme when you are making something
              Bastion related.
            </p>
            <div className='brandColorSwatches'>
              {
                components.colors.map((color, i) => {
                  return (
                    <div className='brandColorSwatch' key={ i } style={{
                      backgroundColor: `#${color.hex}`,
                      color: color.dark ? 'white' : 'black',
                      border: `2px solid rgba(${color.dark ? '255, 255, 255' : '0, 0, 0'}, .05)`
                    }}>
                      <div className='brandColorName'>
                        { color.name }
                      </div>
                      <div className='brandColorCodes'>
                        <code>#{ color.hex }</code>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandingPage;
