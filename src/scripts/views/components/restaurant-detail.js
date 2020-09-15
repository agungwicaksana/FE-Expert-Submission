import CONFIG from '../../globals/config';
import { screenWidth } from '../../utils/get-viewport';
import { reviewTemplate } from '../templates/template-creator';

const RestaurantDetail = {
  render(detail) {
    console.log(detail);
    let page = '';
    page += this._jumbotron(detail);
    page += this._header(detail);
    page += this._description(detail);
    page += this._info(detail);
    page += this._rating(detail);
    page += this._menu(detail);
    page += this._reviews(detail);
    page += this._saveRestaurant(detail);
    return page;
  },

  _jumbotron({ pictureId }) {
    const pictureSize = (screenWidth() > 800) ? 'large' : 'medium';
    return `<div class="hero" style="background-image: url('${CONFIG.API_BASE_URL}/images/${pictureSize}/${pictureId}')"></div>`;
  },

  _header({ name, city }) {
    return `
      <div class="header container">
        <div class="row jcc tc">
          <h1><u>${name}</u></h1>
          <h2>${city}</h2>
        </div>
      </div>
    `;
  },

  _description({ description }) {
    return `
      <div class="container">
        <div class="row">
          <div class="col wm100">
            <p class="description" aria-roledescription="description">
              ${description}
            </p>
          </div>
        </div>
      </div>
    `;
  },

  _info({ address, categories, city }) {
    return `
      <div class="container">
        <div class="row jcc">
          <div class="col w100 wm50">
            <p class="info">Address: ${address}, ${city}.</p>
            <p class="info">Categories: ${this.__categoriesStringifier(categories)}</p>
          </div>
    `;
  },

  _rating({ rating }) {
    return `
          <div class="col w100 wm50 jce">
            <p class="rating"><i class="fa fa-star" aria-hidden="true"></i> Rating: ${rating}</p>
          </div>
        </div>
      </div>
    `;
  },

  _menu({ menus: { foods, drinks } }) {
    const foodList = this.__createList(foods);
    const drinkList = this.__createList(drinks);
    return `
      <div class="menu container">
        <div class="row">
          <div class="col w100 jcc">
            <h3>Menu</h3>
          </div>
        </div>
        <div class="row jcc">
          <div class="col w100 wm45">
            <p class="menu-title">Foods</p>
            <ul class="menu-list">
              ${foodList}
            </ul>
          </div>
          <div class="col w100 wm45">
            <p class="menu-title">Beverages</p>
            <ul class="menu-list">
              ${drinkList}
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  _reviews({ consumerReviews }) {
    const reviews = this.__createReviews(consumerReviews);
    return `
      <div class="container">
        <div class="row">
          <div class="col w100 jcc tc">
            <p>Reviews</p>
          </div>
        </div>
        <div class="row jcc">
          <div class="reviews-container col w100 wm55">
            ${reviews}
          </div>
        </div>
      </div>
    `;
  },

  _saveRestaurant({ id }) {
    // save to idb
    return `
      <button class="save-button" aria-label="Save button"><i class="fa fa-heart"></i></button>
    `;
  },

  __categoriesStringifier(categories) {
    let categoryText = [];
    categories.forEach((category) => {
      categoryText.push(category.name);
    });
    categoryText = categoryText.join(', ');
    return categoryText;
  },

  __createList(items) {
    return items.map((item) => `<li>${item.name}</li>`).join('');
  },

  __createReviews(reviews) {
    return reviews.map((review) => reviewTemplate(review)).join('');
  },
};

export default RestaurantDetail;
