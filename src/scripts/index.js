import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';
import 'font-awesome/css/font-awesome.css';

// import Restaurants from './restaurants';
import App from './views/app';

// document.addEventListener('DOMContentLoaded', () => {
//   const Restos = new Restaurants();
//   Restos.render();
// });

const app = new App(document.getElementById('main-content'));

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
