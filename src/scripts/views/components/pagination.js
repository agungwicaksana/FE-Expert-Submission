class Pagination extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div id="pagination" class="col w100 wm55 jcc">
      </div>
    `;
  }
}

customElements.define('pagination-btns', Pagination);
