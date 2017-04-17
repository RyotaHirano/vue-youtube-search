// @flow

import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'
import U_fetchYouTubeVideos from '../util/fetchYouTubeVideos'

Vue.use(Vuex);

const state: {
  videos: Array<mixed>,
  loadedVideoNum: number,
  allowShowVideos: boolean,
  searchText: string,
  isFocusSearchInput: boolean,
  isLoadingVideos: boolean,
  hitVideo: boolean,
} = {
  videos: [],
  loadedVideoNum: 0,
  allowShowVideos: false,
  searchText: '',
  isFocusSearchInput: false,
  isLoadingVideos: false,
  hitVideo: false,
};

export const mutations = {
  fetchYouTubeVideos(state: Object) {
    U_fetchYouTubeVideos(state)
  },
  resetFetchVideos(state: Object) {
    state.videos = []
  },
  updateSearchText(state: Object, text: string) {
    state.searchText = text
  },
  updateLoadedVideoNum(state: Object) {
    state.loadedVideoNum += 1
  },
  allowShowVideos(state: Object, bool: boolean) {
    state.allowShowVideos = bool
  },
  isFocusSearchInput(state: Object, bool: boolean) {
    state.isFocusSearchInput = bool
  },
  isLoadingVideos(state: Object, bool: boolean) {
    state.isLoadingVideos = bool
  },
};

const actions = {
  fetchYouTubeVideos({ commit }) {
    commit('fetchYouTubeVideos')
  },
  resetFetchVideos({ commit }) {
    commit('resetFetchVideos')
  },
  updateSearchText({ commit }, text) {
    commit('updateSearchText', text)
  },
  updateLoadedVideoNum({ commit }) {
    commit('updateLoadedVideoNum')
  },
  allowShowVideos({ commit }, bool) {
    commit('allowShowVideos', bool)
  },
  isFocusSearchInput({ commit }, bool) {
    commit('isFocusSearchInput', bool)
  },
  isLoadingVideos({ commit }, bool) {
    commit('isLoadingVideos', bool)
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store