import React from 'react';
import loaderSrc from '../assets/loader.gif';

/**
 * Creates Loader Component
 * @return {string} HTML for Loader Component
 */
export default function Loader() {
  return (
    <div>
      <img
        style={{height: '300px', width: '300px'}}
        src={loaderSrc}
        alt="Loader icon"
      />
    </div>
  );
}
