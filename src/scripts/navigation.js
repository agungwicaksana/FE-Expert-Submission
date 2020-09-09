/* eslint-disable no-param-reassign */
class Nav {
  static drawer() {
    const drawerContainer = document.querySelector('.drawer-container');
    const drawer = document.querySelector('.drawer');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      drawerContainer.classList.toggle('open');
      event.preventDefault();
      closeBtn.style.transform = 'rotate(0deg)';
      closeBtn.style.transition = '.2s';
    });

    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.closeDrawer(closeBtn, drawer, drawerContainer);
    });

    drawerContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('drawer-container')) {
        e.preventDefault();
        this.closeDrawer(closeBtn, drawer, drawerContainer);
      }
    });
  }

  static closeDrawer(closeBtn, drawer, drawerContainer) {
    closeBtn.style.transform = 'rotate(180deg)';
    closeBtn.style.transition = '.4s';
    setTimeout(() => {
      drawer.classList.remove('open');
      drawerContainer.classList.remove('open');
    }, 60);
  }
}

export default Nav;
