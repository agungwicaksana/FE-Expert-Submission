import FavoriteRestaurantIdb from '../../../data/idb';

class FavoriteButton {
  async init(restaurant) {
    this._restaurant = restaurant;
    this._button = document.querySelector('.favorite-button');
    const favorited = await this._checkButton();
    this._initButton(favorited);
  }

  _initButton(favorited) {
    this._button.addEventListener('click', async (event) => {
      event.preventDefault();
      if (favorited) {
        await this.__unfavorite();
      } else {
        await this.__favorite();
      }
    });
  }

  async _checkButton() {
    const status = await this.__isFavorited();
    if (status) {
      this.__showUnfavoriteButton();
    } else {
      this.__showFavoriteButton();
    }
    return !!status;
  }

  async __isFavorited() {
    const check = await FavoriteRestaurantIdb.getRestaurant(this._restaurant.id);
    return check;
  }

  async __favorite() {
    const favorited = await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
    if (favorited) {
      this.__showUnfavoriteButton();
    }
  }

  async __unfavorite() {
    await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
    this.__showFavoriteButton();
  }

  __showUnfavoriteButton() {
    this._button.classList.add('favorited');
    this._button.classList.remove('unfavorited');
    this._button.setAttribute('aria-label', 'Unfavorite this restaurant!');
  }

  __showFavoriteButton() {
    this._button.classList.remove('favorited');
    this._button.classList.add('unfavorited');
    this._button.setAttribute('aria-label', 'Favorite this restaurant!');
  }
}

export default FavoriteButton;
