const Loading = {
  _container: document.getElementById('loading'),
  _text: 'Loading...',

  render() {
    this._container.style.position = 'fixed';
    this._container.innerHTML = this._element();
    this._init();
  },

  remove(error = false) {
    if (!error) {
      this._container.innerHTML = '';
      this._container.style.position = 'static';
    } else {
      this._container.innerHTML = this._showError(error);
    }
  },

  _element() {
    return `
      <div class="col aic">
          <p class="loading tc"></p>
      </div>
    `;
  },

  _init() {
    const textContainer = document.querySelector('p.loading');
    const spannedText = this._spanitiaze(this._text);
    spannedText.forEach((span) => {
      textContainer.innerHTML += span;
    });
    this._playAnimation();
  },

  _spanitiaze(text) {
    const spanned = [];
    for (let i = 0; i < text.length; i += 1) {
      const span = `<span>${text.charAt(i)}</span>`;
      spanned.push(span);
    }
    return spanned;
  },

  _playAnimation() {
    const spans = document.querySelectorAll('p.loading span');
    let index = 0;
    setInterval(() => {
      const span = spans[index];
      span.classList.add('play');
      setTimeout(() => {
        this._stopAnimation(span);
      }, 1200);
      index += 1;
      if (index === spans.length) {
        index = 0;
      }
    }, 500);
  },

  _stopAnimation(span) {
    span.classList.remove('play');
  },

  _showError(error) {
    return `
      <div class="container aic">
        <div class="row jcc tc">
          <p class="error">${error}</p>
          <a class="error" href="#/home"><u>Home</u></a>
        </div>
      </div>
    `;
  },
};

export default Loading;
