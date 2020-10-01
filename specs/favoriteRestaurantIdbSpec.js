/* eslint-disable */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import { FavoriteRestaurant } from './helper';

describe('Favorite restaurant Idb contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurant.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
