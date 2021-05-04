import { GET_IMAGE_DATA } from "@/store/types-getter";
import { SET_IMAGE_DATA, UNSET_IMAGE_DATA } from "@/store/types-mutation";
import { FETCH_IMAGE_DATA } from "@/store/types-action";

import { IMAGE_FETCH_API } from "@/store/api";

// initial state
export const state = () => ({
  imageData: []
});

export const getters = {
  [GET_IMAGE_DATA]: state => {
    return state.imageData;
  }
};

// mutations
const mutations = {
  [SET_IMAGE_DATA](state, data) {
    state.imageData = data;
  },
  [UNSET_IMAGE_DATA](state) {
    state.imageData = [];
  }
};

// Actions
const actions = {
  [FETCH_IMAGE_DATA]({ commit }, searchParam) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(IMAGE_FETCH_API, {
          params: searchParam
        })
        .then(function(response) {
          commit("SET_IMAGE_DATA", response);
          resolve();
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
