import React from 'react';
import { render } from 'react-dom';
import App from './App';

import planetsAtlas from './atlas/planets.atlas';
import planetsTexture from './atlas/planets.png';
import astrologyAtlas from './atlas/astrology.atlas';
import astrologyTexture from './atlas/astrology.png';

console.log(planetsAtlas);

// Set your mapbox token here
const MAPBOX_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
console.log(MAPBOX_TOKEN);

// import { base as astro } from 'astronomia';

// console.log(astro);
// console.log(planetsAtlas);

const root = document.getElementById('app_root');
document.body.appendChild(root);

render( < App / > , root);
if (this) {
   thenThat();
}
