/* eslint-disable */
import FavoriteRestaurantIdb from '../src/scripts/data/idb';
import { addFavoriteButton, initButton, restaurantTestingData } from './helper';

describe('Unfavoriting a restaurant', () => {
  beforeEach(async () => {
    addFavoriteButton();
    await FavoriteRestaurantIdb.putRestaurant(restaurantTestingData);
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(restaurantTestingData.id);
  })

  it('should display unfavorite button when restaurant has been favorited', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Unfavorite this restaurant!"]'))
      .toBeTruthy();
  })

  it('should not show favorite button when the restaurant has been favorited', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Favorite this restaurant!"]'))
      .toBeFalsy();
  })
})