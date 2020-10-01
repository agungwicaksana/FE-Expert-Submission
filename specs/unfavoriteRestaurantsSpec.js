/* eslint-disable */
import { addFavoriteButton, initButton, restaurantTestingData, FavoriteRestaurant } from './helper';

describe('Unfavoriting a restaurant', () => {
  beforeEach(async () => {
    addFavoriteButton();
    await FavoriteRestaurant.putRestaurant(restaurantTestingData);
  })
  
  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(restaurantTestingData.id);
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

  it('should be able to remove favorited restaurants from list', async () => {
    await initButton(restaurantTestingData);
    document.querySelector('[aria-label="Unfavorite this restaurant!"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  })

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await initButton(restaurantTestingData);
    await FavoriteRestaurant.deleteRestaurant(restaurantTestingData.id);

    document.querySelector('[aria-label="Unfavorite this restaurant!"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  })
})