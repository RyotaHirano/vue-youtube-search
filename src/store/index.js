// @flow

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

export const API_YOUTUBE_URL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict';
export const API_YOUTUBE_KEY: string = 'AIzaSyD3UHH4HeY7ki2njecykZ2xMx9xToqgYNM';

Vue.use(Vuex);

const state: {
  videos: Array<mixed>,
  loadedVideoNum: number,
  allowShowVideos: boolean,
  searchText: string,
  isFocusSearchInput: boolean,
  isLoadingVideos: boolean,
  hitVideo: boolean,
  historySearchWords: Array<string>,
  historyTextTimer: null,
} = {
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
});

export default store