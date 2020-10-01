const { itActsAsFavoriteRestaurantModel } = require("./contract/favoriteRestaurantContract");

/* eslint-disable */
let favoriteRestaurant = [];

const favoriteRestaurantArray = {
  getRestaurant(id) {
    if(!id){
      return;
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id == id)
  },

  getAllRestaurants() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if(!restaurant.hasOwnProperty('id')) {
      return;
    }

    if(this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite restaurant array contract test implementation', () => {
  afterEach(() => favoriteRestaurant = []);

  itActsAsFavoriteRestaurantModel(favoriteRestaurantArray);
});
