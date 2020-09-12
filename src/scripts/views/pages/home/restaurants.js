import { restaurantCard } from '../../templates/template-creator';
import { sortBy, clearActiveButtons, setActiveButton, scrollToRestaurantsSection } from '../../../utils/home-utils';
import RestaurantsData from '../../../data/restaurants-data';
import Page from './page';

class Restaurants {
  constructor() {
    this._category = 'name'; // default category
    this._dataPerPage = 9;
    this._activePage = 1;
    this._renderPageButtons();
    this._getCategory();
  }

  _getCategory() {
    const ctgButtons = document.querySelectorAll('.ctg-button');
    ctgButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        clearActiveButtons(ctgButtons);
        btn.classList.add('active');
        this._category = btn.innerText.toLowerCase();
        this._resetPageButtons();
        this.render();
      });
    });
  }

  async _getNumberOfPages() {
    const restaurants = await this._getData(false);
    return Page.getNumberOfPages({
      data: restaurants,
      dataPerPage: this._dataPerPage,
    });
  }

  async _renderPageButtons() {
    const numberOfPages = await this._getNumberOfPages();
    Page.renderButtons(numberOfPages);
    this._initPageButtons();
  }

  _initPageButtons() {
    const buttons = document.querySelectorAll('.pg-button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        clearActiveButtons(buttons);
        setActiveButton(button);
        const activePage = parseInt(button.innerHTML, 10);
        this._activePage = activePage;
        this.render();
        scrollToRestaurantsSection();
      });
    });
  }

  _resetPageButtons() {
    const buttons = document.querySelectorAll('.pg-button');
    clearActiveButtons(buttons);
    setActiveButton(buttons[0]);
    this._activePage = 1;
  }

  async _getData(showLoading) {
    const restaurants = await RestaurantsData.list(showLoading);
    return restaurants;
  }

  async _sortData(showLoading) {
    const data = await this._getData(showLoading);
    return sortBy(data, this._category);
  }

  async _prepareToRender(showLoading) {
    const restaurants = await this._sortData(showLoading);
    const pagedRestaurants = Page.getPagedData({
      data: restaurants,
      dataPerPage: this._dataPerPage,
      activePage: this._activePage,
    });
    return pagedRestaurants;
  }

  async render(showLoading = false) {
    const container = document.querySelector('.card-container');
    const pagedRestaurants = await this._prepareToRender(showLoading);
    container.innerHTML = '';
    pagedRestaurants.forEach((restaurant) => {
      container.innerHTML += restaurantCard(restaurant);
    });
  }
}

export default Restaurants;
