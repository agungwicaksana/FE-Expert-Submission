import CONFIG from '../globals/config';

class Review {
  static async post({ id, name, review }) {
    try {
      const body = {
        id: `${id}`,
        name: `${name}`,
        review: `${review}`,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(`${CONFIG.API_BASE_URL}/review`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }
}

export default Review;
