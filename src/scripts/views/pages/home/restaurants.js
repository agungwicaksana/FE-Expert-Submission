import Data from '../../../../DATA.json';
import { restaurantCard } from '../../templates/template-creator';
import { sortBy } from '../../../utils/home-utils';

class Restaurants {
  constructor(category) {
    this._category = category;
    this._getCategory();
  }

  getData() {
    return Data.restaurants;
  }

  render() {
    const container = document.querySelector('.card-container');
    const restaurants = sortBy(this.getData(), this._category);
    container.innerHTML = '';
    restaurants.forEach((restaurant) => {
      container.innerHTML += restaurantCard(restaurant);
    });
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
}

export default Restaurants;
