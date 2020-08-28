class Nav {
    static drawer() {
        const drawer = document.querySelector('.drawer');
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        
        menuBtn.addEventListener('click', e => {
            drawer.classList.toggle('open');
            drawer.classList.toggle('closed');
            e.preventDefault();
            closeBtn.style.transform = "rotate(0deg)";
            closeBtn.style.transition = ".2s";
        })

        closeBtn.addEventListener('click', e => {
            closeBtn.style.transform = "rotate(180deg)";
            closeBtn.style.transition = ".4s";
            setTimeout(() => {
                drawer.classList.remove('open');
                drawer.classList.add('closed');
            }, 60);
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

export default Nav;