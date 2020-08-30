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

        closeBtn.addEventListener('click', e => {
            e.preventDefault();
            closeDrawer();
        });

        drawerContainer.addEventListener('click', e => {
            if( e.target.classList.contains('drawer-container') ) {
                e.preventDefault();
                closeDrawer();
            }
        });

        function closeDrawer() {
            closeBtn.style.transform = "rotate(180deg)";
            closeBtn.style.transition = ".4s";
            setTimeout(() => {
                drawer.classList.remove('open');
                drawerContainer.classList.remove('open');
            }, 60);
        }
    }
}

export default Nav;