class Footer extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <footer class="container clr1">
          <p>Copyright &copy; 2020 - Meals Corner</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
