import 'regenerator-runtime'; /* for async await transpile */
import '../public/fonts/Rancho-Regular.ttf';
import '../public/fonts/Neucha-Regular.ttf';
import '../styles/main.css';
import 'font-awesome/css/font-awesome.css';

import Nav from './navigation.js';
import Restaurants from './restaurants.js';

document.addEventListener('DOMContentLoaded', () => {
    const Restos = new Restaurants();
    Nav.drawer();
    Restos.render();
})