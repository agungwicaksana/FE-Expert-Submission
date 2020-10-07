import RestaurantsData from '../../data/restaurants-data';
import { screenWidth } from '../../utils/get-viewport';
import { createReviews } from '../templates/template-creator';

const RestaurantDetail = {
  async render(detail) {
    let page = '';
    const jumbotron = await this.jumbotron(detail);
    page += jumbotron;
    // eslint-disable-next-line array-callback-return
    Object.values(this.components).map((component) => {
      page += component(detail);
    });
    return page;
  },

  jumbotron: async ({ pictureId, name }) => {
    const pictureSize = (screenWidth() > 800) ? 'large' : 'medium';
    return `
      <div class="hero">
        <img class="lazyload" data-src="${await RestaurantsData.picture(pictureSize, pictureId)}" alt="${name}">
      </div>
    `;
  },

  components: {
    header: ({ name, city }) => `
        <div class="header container">
          <div class="row jcc tc">
            <h1><u>${name}</u></h1>
            <h2>${city}</h2>
          </div>
        </div>
      `,

    description: ({ description }) => `
        <div class="container">
          <div class="row">
            <div class="col wm100">
              <p class="description" aria-roledescription="description">
                ${description}
              </p>
            </div>
          </div>
        </div>
      `,

    info: ({ address, categories, city }) => `
        <div class="container">
          <div class="row jcc">
            <div class="col w100 wm50">
              <p class="info">Address: ${address}, ${city}.</p>
              <p class="info">Categories: ${RestaurantDetail._categoriesStringifier(categories)}</p>
            </div>
      `,

    rating: ({ rating }) => `
            <div class="col w100 wm50 jce">
              <p class="rating"><i class="fa fa-star" aria-hidden="true"></i> Rating: ${rating}</p>
            </div>
          </div>
        </div>
      `,

    menu: ({ menus: { foods, drinks } }) => {
      const foodList = RestaurantDetail._createList(foods);
      const drinkList = RestaurantDetail._createList(drinks);
      return `
        <div class="menu container">
          <div class="row">
            <div class="col w100">
              <p class="section-title w100 tc">Menu</p>
            </div>
          </div>
          <div class="row jcc">
            <div class="col w100 wm45">
              <p class="w25">Foods</p>
              <ul class="menu-list">
                ${foodList}
              </ul>
            </div>
            <div class="col w100 wm45">
              <p class="w25">Beverages</p>
              <ul class="menu-list">
                ${drinkList}
              </ul>
            </div>
          </div>
        </div>
      `;
    },

    reviews: ({ consumerReviews }) => {
      const reviews = createReviews(consumerReviews);
      return `
        <div class="container">
          <div class="row jcc">
            <div class="col w100 wm55">
              <p class="section-title w100 tc">Reviews</p>
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

    addReview: ({ id }) => `
      <div class="container">
        <div class="row jcc">
          <div class="col w100 wm55 jcc">
            <p class="section-title">Post Your Review</p>
            <form id="form-review" class="w80">
              <input type="hidden" id="id" value="${id}">
              <div class="col w100">
                <label for="name" class="label-form">Name</label>
                <input type="text" id="name" class="input-form">
              </div>
              <div class="col w100">
                <label for="review" class="label-form">Your review</label>
                <textarea id="review" class="input-form" rows="7"></textarea>
              </div>
              <div class="col w100 jcc">
                <button id="send-button">Send!</button>
              </div>
              <div class="col w100">
                <p class="info tc">Halo</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      `,

    saveRestaurant: () => `
        <button class="favorite-button" aria-label="Favorite"><i class="fa fa-heart"></i></button>
    `,
  },

  _categoriesStringifier(categories) {
    let categoryText = [];
    categories.forEach((category) => {
      categoryText.push(category.name);
    });
    categoryText = categoryText.join(', ');
    return categoryText;
  },

  _createList(items) {
    return items.map((item) => `<li>${item.name}</li>`).join('');
  },
};

export default RestaurantDetail;
