/* eslint-disable */ 
import FavoriteRestaurantIdb from '../src/scripts/data/idb';
import { addFavoriteButton, restaurantTestingData, initButton } from './helper';

describe('Favoriting a restaurant', () => {
  beforeEach(async () => {
    addFavoriteButton();
  })

  it('should show favorite button when the restaurant has not been favorited', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Favorite this restaurant!"]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Unfavorite this restaurant!"]'))
      .toBeFalsy();
  })

  it('should be able to favorite the restaurant', async () => {
    await initButton(restaurantTestingData);
    document.querySelector('.favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getRestaurant(restaurantTestingData.id))
      .toEqual(restaurantTestingData);
    
    await FavoriteRestaurantIdb.deleteRestaurant(restaurantTestingData.id);
  })

  it('should not favorite a restaurant again when its already favorited', async () => {
    await initButton(restaurantTestingData);
    await FavoriteRestaurantIdb.putRestaurant(restaurantTestingData);
    document.querySelector('.favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([restaurantTestingData]);
    
    await FavoriteRestaurantIdb.deleteRestaurant(restaurantTestingData.id);
  })

  it('should not add a restaurant if it has no id', async () => {
    await initButton({});
    document.querySelector('.favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([]);
  })
});
