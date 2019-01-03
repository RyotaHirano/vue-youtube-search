import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export const API_YOUTUBE_URL = process.env.VUE_APP_API_YOUTUBE_URL;
export const API_YOUTUBE_KEY = process.env.VUE_APP_API_YOUTUBE_KEY;

Vue.use(Vuex);

const state = {
  videos: [],
  loadedVideoNum: 0,
  allowShowVideos: false,
  searchText: '',
  isFocusSearchInput: false,
  isLoadingVideos: false,
  hitVideo: false,
  historySearchWords: [],
  historyTextTimer: null
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
