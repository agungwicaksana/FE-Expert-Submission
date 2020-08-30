import Data from '../DATA.json';

class Restaurants {
    static getData() {
        return Data.restaurants;
    }

    static generateDOM() {
        const restaurants = this.getData();
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

    static render() {
        const container = document.querySelector('.card-container');
        const cards = this.generateDOM();
        container.innerHTML = cards;
    }

    static trimParagraph(par) {
        let wordsLength = 108;
        let paragraph = par.split(' ');
        const parLength = paragraph.length;
        
        (wordsLength > parLength) ? wordsLength = parLength : wordsLength;
        paragraph = paragraph.slice(0, wordsLength);
        paragraph = paragraph.join(' ');
        (wordsLength < parLength) ? paragraph += ' . . .' : null;
        return paragraph;
    }
}

export default Restaurants;