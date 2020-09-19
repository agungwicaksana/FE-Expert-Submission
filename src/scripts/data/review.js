import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class Review {
  static async post({ id, name, review }) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.AUTH_TOKEN,
      };
      const body = {
        id: `${id}`,
        name: `${name}`,
        review: `${review}`,
      };
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      };
      const response = await fetch(API_ENDPOINT.REVIEW, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }
}

export default Review;
