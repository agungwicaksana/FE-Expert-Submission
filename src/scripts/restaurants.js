import Data from '../DATA.json';

class Restaurants {
    constructor(category = 'name') {
        this.category = category;
        this.getCategory()
    }

    getData() {
        return Data.restaurants;
    }

    generateDOM() {
        const restaurants = this.sortBy();
        let cards = '';
        restaurants.forEach(restaurant => {
            const {id, name, pictureId, city, description, rating} = restaurant;
            cards += `
                <div class="col w100 card" tabindex="1">
                    <div class="card-img">
                        <img src="${pictureId}" alt="Picture of ${name}">
                        <span aria-label="City: ${city}">${city}</span>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title" aria-label="Restaurant name: ${name}">${name}</h4>
                        <span class="rating" aria-label="Rating: ${rating}"><i class="fa fa-star" aria-hidden="true"></i> ${rating}</span>
                        <p class="card-desc" aria-roledescription="description">
                            ${this.trimParagraph(description)}
                        </p>
                    </div>
                </div>
            `;
        });
        return cards;
    }

    render() {
        const container = document.querySelector('.card-container');
        const cards = this.generateDOM();
        container.innerHTML = cards;
    }

    trimParagraph(par) {
        let wordsLength = 50;
        let paragraph = par.split(' ');
        const parLength = paragraph.length;
        
        (wordsLength > parLength) ? wordsLength = parLength : wordsLength;
        paragraph = paragraph.slice(0, wordsLength);
        paragraph = paragraph.join(' ');
        (wordsLength < parLength) ? paragraph += ' . . .' : null;
        return paragraph;
    }

    sortBy() {
        let data = this.getData();
        switch (this.category) {
            case 'rating':
                data.sort((a,b) => b.rating - a.rating);
                break;
            case 'city':
                data.sort((a,b) => a.city.localeCompare(b.city));
                break;
            default:
                data.sort((a,b) => a.name.localeCompare(b.name));
                break;
        }
        return data;
    }

    getCategory() {
        const ctgButtons = document.querySelectorAll('.ctg-button');
        ctgButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.clearActiveButtons(ctgButtons);
                btn.classList.add('active');
                this.category = btn.innerText.toLowerCase();
                this.render()
            });
        });
    }

    clearActiveButtons(buttons) {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
    }
}

export default Restaurants;