import FavoriteRestaurantIdb from '../../../data/idb';
import FavoriteRestaurants from './favorite-restaurants';

const Favorite = {
  async render() {
    return `
      <div id="restaurants-section" class="container">
        <div class="row">
          <div class="col w100 jcc">
            <h1 class="tc">Favorite Restaurants</h1>
          </div> 
        </div>
        <div class="row card-container aist">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const favorites = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('.card-container');
    const Favorites = new FavoriteRestaurants(container);
    if (favorites.length) {
      Favorites.render(favorites);
    } else {
      Favorites.emptyHandler();
    }
  },
};

export default Favorite;
