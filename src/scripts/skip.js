class Skip {
    static reorderContent() {
        const skipLink = document.getElementById('.skip');
        const hero = document.getElementById('hero');
        
        skipLink.addEventListener('keypress',e => {
            e.preventDefault();
            hero.focus();
        })
    }
}

export default Skip;