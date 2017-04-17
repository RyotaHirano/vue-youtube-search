// @flow

import Vue from 'vue'
import Vuex from 'vuex'

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
  resetFetchVideos(state: Object) {
    state.videos = []
  },
  updateFetchVideos(state: Object, videos: Array<mixed>) {
    state.videos = videos
  },
  updateSearchText(state: Object, text: string) {
    state.searchText = text
  },
  updateLoadedVideoNum(state: Object) {
    state.loadedVideoNum += 1
  },
  resetLoaddedVideoNum(state: Object) {
    state.loadedVideoNum = 0
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
  updateHitVideo(state: Object, bool: boolean) {
    state.hitVideo = bool
  }
};

const actions = {
  resetFetchVideos({ commit }) {
    commit('resetFetchVideos')
  },
  updateFetchVideos({ commit }, videos) {
    commit('updateFetchVideos', videos)
  },
  updateSearchText({ commit }, text) {
    commit('updateSearchText', text)
  },
  updateLoadedVideoNum({ commit }) {
    commit('updateLoadedVideoNum')
  },
  resetLoaddedVideoNum({ commit }) {
    commit('resetLoaddedVideoNum')
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
  updateHitVideo({ commit }, bool) {
    commit('updateHitVideo', bool)
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store