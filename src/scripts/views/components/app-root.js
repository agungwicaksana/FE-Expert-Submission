class AppRoot extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <a href="#main-content" id="skip">SKIP to content</a>
      <app-drawer></app-drawer>
      <main id="main-content"></main>
      <div id="loading"></div>
      <app-footer></app-footer>
      <div class="modal-container"></div>
     `;
  }
}

customElements.define('app-root', AppRoot);
