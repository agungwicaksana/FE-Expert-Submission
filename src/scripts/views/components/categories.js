class Categories extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="col w100 wm55">
          <p class="label">Sort by :</p>
        </div>
        <div class="col w100 wm55 jcb">
          <button class="ctg-button active" aria-label="Sort by name">Name</button>
          <button class="ctg-button" aria-label="Sort by rating">Rating</button>
          <button class="ctg-button" aria-label="Sort by city">City</button>
        </div>
     `;
  }
}

customElements.define('category-btns', Categories);
