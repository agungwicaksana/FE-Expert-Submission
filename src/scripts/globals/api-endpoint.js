import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.API_BASE_URL}/review`,
  IMAGE: (size, pictureId) => `${CONFIG.API_BASE_URL}/images/${size}/${pictureId}`,
};

export default API_ENDPOINT;
