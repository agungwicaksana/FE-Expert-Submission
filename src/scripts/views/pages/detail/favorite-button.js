class FavoriteButton {
  async init({ restaurant, FavoriteRestaurant }) {
    this._restaurant = restaurant;
    this._FavoriteRestaurant = FavoriteRestaurant;
    this._button = document.querySelector('.favorite-button');
    this.favorited = await this._checkButton();
    this._initButton();
  }

  _initButton() {
    this._button.addEventListener('click', async (event) => {
      event.preventDefault();
      if (this.favorited) {
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
    const check = await this._FavoriteRestaurant.getRestaurant(this._restaurant.id);
    return check;
  }

  async __favorite() {
    const favorited = await this._FavoriteRestaurant.putRestaurant(this._restaurant);
    if (favorited) {
      this.__showUnfavoriteButton();
    }
    this.init({ restaurant: this._restaurant, FavoriteRestaurant: this._FavoriteRestaurant });
  }

  async __unfavorite() {
    await this._FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
    this.__showFavoriteButton();
    this.init({ restaurant: this._restaurant, FavoriteRestaurant: this._FavoriteRestaurant });
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
