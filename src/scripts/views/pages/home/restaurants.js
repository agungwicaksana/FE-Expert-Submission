import { restaurantCard } from '../../templates/template-creator';
import { sortBy } from '../../../utils/home-utils';
import RestaurantsData from '../../../data/restaurants-data';

class Restaurants {
  constructor() {
    this._category = 'name'; // default category
    this._getCategory();
  }

  _getCategory() {
    const ctgButtons = document.querySelectorAll('.ctg-button');
    ctgButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this._clearActiveButtons(ctgButtons);
        btn.classList.add('active');
        this._category = btn.innerText.toLowerCase();
        this.render();
      });
    });
  }

  _clearActiveButtons(buttons) {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });
  }

  async _getData() {
    const restaurants = await RestaurantsData.list();
    return restaurants;
  }

  async _sortData() {
    const data = await this._getData();
    return sortBy(data, this._category);
  }

  async render() {
    const container = document.querySelector('.card-container');
    const restaurants = await this._sortData();
    container.innerHTML = '';
    restaurants.forEach((restaurant) => {
      container.innerHTML += restaurantCard(restaurant);
    });
  }
}

export default Restaurants;
