import FavoriteRestaurantIdb from '../../../data/idb';

class FavoriteButton {
  async init(restaurant) {
    this._restaurant = restaurant;
    this._button = document.querySelector('.favorite-button');
    await this._checkButton();
    this._initButton();
  }

  _initButton() {
    this._button.addEventListener('click', async (event) => {
      event.preventDefault();
      if (await this.__isFavorited()) {
        this.__unfavorite();
      } else {
        this.__favorite();
      }
    });
  }

  async _checkButton() {
    if (await this.__isFavorited()) {
      this.__favoritedButton();
    } else {
      this.__unfavoritedButton();
    }
  }

  async __isFavorited() {
    const check = await FavoriteRestaurantIdb.getRestaurant(this._restaurant.id);
    return check;
  }

  async __favorite() {
    const favorited = await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
    if (favorited) {
      this.__favoritedButton();
    }
  }

  __unfavorite() {
    FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
    this.__unfavoritedButton();
  }

  __favoritedButton() {
    this._button.classList.add('favorited');
    this._button.classList.remove('unfavorited');
  }

  __unfavoritedButton() {
    this._button.classList.remove('favorited');
    this._button.classList.add('unfavorited');
  }
}

export default FavoriteButton;
