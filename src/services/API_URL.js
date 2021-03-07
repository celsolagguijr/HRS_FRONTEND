const localAPI = "http://192.168.1.3:3000/api/";
const prodAPI = null;
const API = prodAPI != null ? prodAPI : localAPI;
export default API;
