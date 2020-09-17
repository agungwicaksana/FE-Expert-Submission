const Modal = {
  show(content) {
    const container = document.querySelector('.modal-container');
    container.innerHTML = this._element(content);
    this._modalAnimation();
  },

  _modalAnimation() {
    const modal = document.querySelector('.modal .row');
    let time = 0;
    const play = setInterval(() => {
      switch (time) {
        case 10:
          modal.classList.add('show');
          break;
        case 2500:
          modal.classList.remove('show');
          break;
        case 3200:
          this._remove();
          clearInterval(play);
          break;
        default:
          break;
      }
      time += 10;
    }, 10);
  },

  _remove() {
    const modal = document.querySelector('.modal');
    modal.remove();
  },

  _element({ error, message }) {
    return `
      <div class="modal">
        <div class="container">
          <div class="row jcc">
            <div class="col w100 wm45 tc">
              <i class="w100 fa ${error ? 'error fa-exclamation-triangle' : 'success fa-check-circle-o'}" aria-hidden="true"></i>
              <p class="w100">${message}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export default Modal;
