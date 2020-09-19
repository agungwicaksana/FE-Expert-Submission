import API_ENDPOINT from '../globals/api-endpoint';
import Loading from '../views/components/loading';

class RestaurantsData {
  static async list(withLoading) {
    if (withLoading) {
      Loading.render();
    }
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      if (withLoading) {
        Loading.remove();
      }
      return responseJson.restaurants;
    } catch (error) {
      if (withLoading) {
        Loading.remove(error);
      }
      return error;
    }
  }

  static async detail(withLoading, id) {
    if (withLoading) {
      Loading.render();
    }
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      if (withLoading) {
        Loading.remove();
      }
      return responseJson.restaurant;
    } catch (error) {
      if (withLoading) {
        Loading.remove(error);
      }
      return error;
    }
  }
}

export default RestaurantsData;
