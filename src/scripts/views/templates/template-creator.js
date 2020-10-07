import { trimParagraph } from '../../utils/home-utils';
import RestaurantsData from '../../data/restaurants-data';

const restaurantCard = async ({ id, name, pictureId, city, description, rating, favorite }) => `
  <div class="col w100 wm45 wl30 card">
    <a href="#/detail/${id}${favorite ? '/fav' : ''}" class="card-link">
      <div class="card-img">
        <img class="lazyload" data-src="${await RestaurantsData.picture('small', pictureId)}" alt="${name}">
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

const paginationButton = (pageNumber, active) => `
  <button class="pg-button ${active ? 'active' : ''}" aria-label="page ${pageNumber}">${pageNumber}</button>
`;

const _reviewTemplate = ({ name, review, date }) => `
    <div class="row">
      <div class="col w100">
        <p class="review-text">${review} – ${name}</p>
        <p class="review-date"><i class="fa fa-calendar" aria-hidden="true"></i> ${date}</p>
      </div>
    </div>
  `;
const createReviews = (reviews) => reviews.map((review) => _reviewTemplate(review)).join('');

export {
  restaurantCard,
  paginationButton,
  createReviews,
};
