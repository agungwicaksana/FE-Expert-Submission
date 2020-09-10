import { trimParagraph } from '../../utils/home-utils';
import CONFIG from '../../globals/config';

const restaurantCard = ({ id, name, pictureId, city, description, rating }) => `
    <div class="col w100 wm45 wl30 card">
      <a href="#/detail/${id}" class="card-link">
        <div class="card-img">
            <img src="${CONFIG.API_BASE_URL}/images/small/${pictureId}" alt="${name}">
            <span aria-label="City: ${city}">${city}</span>
        </div>
        <div class="card-body">
            <h4 class="card-title" aria-label="Restaurant name: ${name}">${name}</h4>
            <span class="rating" aria-label="Rating: ${rating}"><i class="fa fa-star" aria-hidden="true"></i> ${rating}</span>
            <p class="card-desc" aria-roledescription="description">
                ${trimParagraph(description)}
            </p>
        </div>
      </a>
    </div>
  `;

export {
  restaurantCard,
};
