class Nav {
    static drawer() {
        const drawerContainer = document.querySelector('.drawer-container');
        const drawer = document.querySelector('.drawer');
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        
        menuBtn.addEventListener('click', e => {
            drawer.classList.toggle('open');
            drawerContainer.classList.toggle('open');
            e.preventDefault();
            closeBtn.style.transform = "rotate(0deg)";
            closeBtn.style.transition = ".2s";
        })

        closeBtn.addEventListener('click', e => closeDrawer(e));
        drawerContainer.addEventListener('click', e => closeDrawer(e));

        function closeDrawer(e) {
            closeBtn.style.transform = "rotate(180deg)";
            closeBtn.style.transition = ".4s";
            setTimeout(() => {
                drawer.classList.remove('open');
                drawerContainer.classList.remove('open');
            }, 60);
            e.preventDefault();
            e.stopPropagation();
        }
    }
}

export default Nav;