import { trimParagraph } from '../../utils/home-utils';
import API_ENDPOINT from '../../globals/api-endpoint';

const restaurantCard = ({ id, name, pictureId, city, description, rating }) => `
  <div class="col w100 wm45 wl30 card">
    <a href="#/detail/${id}" class="card-link">
      <div class="card-img">
        <img src="${API_ENDPOINT.IMAGE('small', pictureId)}" alt="${name}">
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
