'use client';

import ReactDOM from 'react-dom';

const SPRITE_VERSION = 1.5;

export function PreloadResources() {
  ReactDOM.preload(`/assets/sprite.svg?v=${SPRITE_VERSION}`, {
    as: 'image',
    // fetchPriority: "high"
  });

  return null;
}
