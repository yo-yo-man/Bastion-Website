import React from 'react';
import './index.css';
import loader from './loader.gif';

class Loader extends React.Component {
  render() {
    return (
      <div className='contentLoaderContainer'>
        <img
          src={ loader }
          alt=''
          className='contentLoader'
          height='80'
        />
      </div>
    );
  }
}

export default Loader;
