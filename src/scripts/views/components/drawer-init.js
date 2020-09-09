/* eslint-disable no-param-reassign */
const DrawerInit = {
  init({ drawer, drawerContainer, menuBtn, closeBtn }) {
    this._eventMenuBtn({ menuBtn, drawer, drawerContainer, closeBtn });
    this._eventCloseBtn({ closeBtn, drawer, drawerContainer });
    this._eventDrawerContainer({ drawerContainer, closeBtn, drawer });
  },

  _eventMenuBtn({ menuBtn, drawer, drawerContainer, closeBtn }) {
    menuBtn.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      drawerContainer.classList.toggle('open');
      event.preventDefault();
      closeBtn.style.transform = 'rotate(0deg)';
      closeBtn.style.transition = '.2s';
    });
  },

  _eventCloseBtn({ closeBtn, drawer, drawerContainer }) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this._closeDrawer({ closeBtn, drawer, drawerContainer });
    });
  },

  _eventDrawerContainer({ drawerContainer, closeBtn, drawer }) {
    drawerContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('drawer-container')) {
        e.preventDefault();
        this._closeDrawer({ closeBtn, drawer, drawerContainer });
      }
    });
  },

  _closeDrawer({ closeBtn, drawer, drawerContainer }) {
    closeBtn.style.transform = 'rotate(180deg)';
    closeBtn.style.transition = '.4s';
    setTimeout(() => {
      drawer.classList.remove('open');
      drawerContainer.classList.remove('open');
    }, 60);
  },
};

export default DrawerInit;
