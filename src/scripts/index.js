import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';
import 'font-awesome/css/font-awesome.css';

import './views/components/drawer';

import Restaurants from './restaurants';

document.addEventListener('DOMContentLoaded', () => {
  const Restos = new Restaurants();
  Restos.render();
});

document.addEventListener('load', () => {

});
