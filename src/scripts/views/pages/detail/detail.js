import RestaurantsData from '../../../data/restaurants-data';
import RestaurantDetail from '../../components/restaurant-detail';

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
    console.log('after render Detail');
  },
};

export default Detail;
