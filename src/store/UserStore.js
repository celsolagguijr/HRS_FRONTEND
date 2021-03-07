import UserAPI from "../services/USER_API";

const state = {};

const mutations = {};

const actions = {
  AUTH: async (state, form) => {
    const requestHeader = {
      contentType: "application/json"
    };

    const response = await UserAPI.Authenticate(form, requestHeader);
    return response.data;
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
