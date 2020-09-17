import RestaurantsData from '../../../data/restaurants-data';
import RestaurantDetail from '../../components/restaurant-detail';
import ReviewForm from './review-form';

const Detail = {
  async render(id) {
    const showLoading = true;
    const detailData = await this._getDetail(showLoading, id);
    const htmlElement = RestaurantDetail.render(detailData);
    return htmlElement;
  },

  async _getDetail(showLoading, id) {
    const detail = await RestaurantsData.detail(showLoading, id);
    return detail;
  },

  async afterRender() {
    const reviewForm = document.getElementById('form-review');
    new ReviewForm().init(reviewForm);
  },
};

export default Detail;
