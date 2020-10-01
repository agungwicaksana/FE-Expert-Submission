import RestaurantsData from '../../../data/restaurants-data';
import RestaurantDetail from '../../components/restaurant-detail';
import ReviewForm from './review-form';
import FavoriteButton from './favorite-button';
import FavoriteRestaurantIdb from '../../../data/idb';

const Detail = {
  async render(url) {
    this.detailData = await this._getData(url);
    const htmlElement = RestaurantDetail.render(this.detailData);
    return htmlElement;
  },

  async _getData({ id, opt }) {
    let data;
    if (opt === 'fav') {
      data = await FavoriteRestaurantIdb.getRestaurant(id);
    } else {
      data = await this._fetchRestaurant(id);
    }
    return data;
  },

  async _fetchRestaurant(id) {
    const showLoading = true;
    const detail = await RestaurantsData.detail(showLoading, id);
    return detail;
  },

  async afterRender() {
    const reviewForm = document.getElementById('form-review');
    new ReviewForm().init(reviewForm);
    await new FavoriteButton().init({
      restaurant: this.detailData,
      FavoriteRestaurant: FavoriteRestaurantIdb,
    });
  },
};

export default Detail;
