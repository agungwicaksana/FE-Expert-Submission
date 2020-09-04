import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';
import 'font-awesome/css/font-awesome.css';

import Nav from './navigation.js';
import Restaurants from './restaurants.js';

document.addEventListener('DOMContentLoaded', () => {
    const Restos = new Restaurants();
    Nav.drawer();
    Restos.render();
})