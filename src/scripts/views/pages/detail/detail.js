import RestaurantsData from '../../../data/restaurants-data';
import RestaurantDetail from '../../components/restaurant-detail';
import ReviewForm from './review-form';
import FavoriteButton from './favorite-button';

const Detail = {
  async render(id) {
    const showLoading = true;
    this.detailData = await this._getDetail(showLoading, id);
    const htmlElement = RestaurantDetail.render(this.detailData);
    return htmlElement;
  },

  async _getDetail(showLoading, id) {
    const detail = await RestaurantsData.detail(showLoading, id);
    return detail;
  },

  async afterRender() {
    const reviewForm = document.getElementById('form-review');
    new ReviewForm().init(reviewForm);
    new FavoriteButton().init(this.detailData);
  },
};

export default Detail;
