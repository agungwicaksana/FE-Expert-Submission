import CONFIG from '../globals/config';

class RestaurantsData {
  static async list() {
    console.log('loading');
    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/list`);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log('error: ', error);
    }
    console.log('selesai loading');
  }
}

export default RestaurantsData;
