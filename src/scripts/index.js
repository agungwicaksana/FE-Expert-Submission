import 'regenerator-runtime'; /* for async await transpile */
import '../public/fonts/Rancho-Regular.ttf';
import '../public/fonts/Neucha-Regular.ttf';
import '../styles/main.css';
import 'font-awesome/css/font-awesome.css';

import nav from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    nav.drawer();
})