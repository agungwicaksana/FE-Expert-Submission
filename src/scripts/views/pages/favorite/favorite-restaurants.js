import empty from '../../components/empty';
import { restaurantCard } from '../../templates/template-creator';

class FavoriteRestaurants {
  constructor(container) {
    this._container = container;
  }

  render(restaurants) {
    this._container.innerHTML = '';
    restaurants.forEach(async (restaurant) => {
      const _restaurant = {
        ...restaurant,
        favorite: true,
      };
      const card = await restaurantCard(_restaurant);
      this._container.innerHTML += card;
    });
  }

  emptyHandler() {
    this._container.innerHTML = empty();
  }
}

export default FavoriteRestaurants;
