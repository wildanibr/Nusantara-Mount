import API_ENDPOINT from './api-endpoint';

class gunungResource {
    static async listGunung() {
        const response = await fetch(API_ENDPOINT.DAFTAR);
        const responseJson = await response.json();
        return responseJson;
      }
      static async detailGunung(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson;
      }
}
export default gunungResource;
