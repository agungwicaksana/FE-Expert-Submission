class Hero extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="hero">
        <div class="container aic">
            <div class="row">
                <div class="col w100 jcc">
                    <h1 class="head tc">Meals Corner</h1>
                </div>
                <div class="col w100 jcc">
                    <h2 class="head tc">Restaurant Finder</h2>
                </div>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', Hero);
