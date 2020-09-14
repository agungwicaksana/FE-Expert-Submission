import DrawerInit from './drawer-init';

class Drawer extends HTMLElement {
  connectedCallback() {
    this._render();
    DrawerInit.init({
      drawerContainer: document.querySelector('.drawer-container'),
      drawer: document.querySelector('.drawer'),
      menuBtn: document.getElementById('menu-btn'),
      closeBtn: document.querySelector('.close-btn'),
      menuList: document.querySelectorAll('.menu-list'),
    });
  }

  _render() {
    this.innerHTML = `
      <nav>
        <div class="container">
          <div class="row">
            <div class="col w80 wm50">
              <img src="./images/logo.svg" alt="Logo: Meals Corner">
            </div>
            <div class="hideon-s wm50">
              <ul>
                ${this._menuLists()}
              </ul>
            </div>
            <div class="col w20 jce showon-s">
              <a id="menu-btn" href="#" class="col aic" aria-label="Menu icon" aria-selected="opening menu"><i class="menu fa fa-bars"></i></a>
            </div>
          </div>
        </div>
      </nav>
      <div class="drawer-container">
        <div class="drawer" aria-label="Menu section">
          <a href="" class="close-btn" aria-label="Close menu"><i class="fa fa-times"></i></a>
          <ul aria-label="menu-section">
            ${this._menuLists()}
          </ul>
        </div>
      </div>
     `;
  }

  _menuLists() {
    return `
      <li><a href="#/home" class="menu-list" aria-label="Menu item: Home">Home</a></li>
      <li><a href="#/favorite" class="menu-list" aria-label="Menu item: Favorite">Favorite</a></li>
      <li><a href="https://agungswebstudio.com" class="menu-list" target="_blank" rel="noreferrer" aria-label="Menu item: About Us">About Us</a></li>
    `;
  }
}

customElements.define('app-drawer', Drawer);
