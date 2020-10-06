/* eslint-disable */
const assert = require('assert');

Feature('Favoriting restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
})

Scenario('Favoriting a restaurant then unfavorite it', async ({ I }) => {
  // Favoriting a restaurant
  I.seeElement('#restaurants-section');
  I.see('No Favorite Restaurants', 'h2');

  I.amOnPage('/');
  
  I.seeElement('.card a');
  I.click(locate('.card a').first());
  const firstRestaurant = locate('.card a .card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);


  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const favoritedRestaurantName = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  // Unfavorite it
  I.click('.card a');

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.see('No Favorite Restaurants', 'h2');
});