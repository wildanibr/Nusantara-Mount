import CONFIG from './config';

const API_ENDPOINT = {
  DAFTAR: `${CONFIG.BASE_URL}gunung`,
  DETAIL: (id) => `${CONFIG.BASE_URL}gunung/${id}`,
};

export default API_ENDPOINT;
