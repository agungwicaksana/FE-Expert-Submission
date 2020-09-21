import empty from '../../components/empty';
import { restaurantCard } from '../../templates/template-creator';

class FavoriteRestaurants {
  constructor(container) {
    this._container = container;
  }

  render(restaurants) {
    this._container.innerHTML = '';
    restaurants.forEach(async (restaurant) => {
      const card = await restaurantCard(restaurant);
      this._container.innerHTML += card;
    });
  }

  emptyHandler() {
    this._container.innerHTML = empty();
  }
}

export default FavoriteRestaurants;
