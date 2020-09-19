import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/responsive.css';
import 'font-awesome/css/font-awesome.css';

import App from './views/app';
import serviceWorkerRegister from './utils/serviceworker-register';

const app = new App(document.getElementById('main-content'));

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
});
