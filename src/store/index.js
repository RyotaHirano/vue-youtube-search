// @flow

import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'
import U_fetchYouTubeVideos from '../util/fetchYouTubeVideos'

Vue.use(Vuex)

export const mutations = {
  fetchYouTubeVideos(state) {
    U_fetchYouTubeVideos(state)
  },
  resetFetchVideos(state) {
    state.videos = []
  },
  updateSearchText(state, text) {
    state.searchText = text
  },
  updateLoadedVideoNum(state) {
    state.loadedVideoNum += 1
  },
  allowShowVideos(state, bool) {
    state.allowShowVideos = bool
  },
  isFocusSearchInput(state, bool) {
    state.isFocusSearchInput = bool
  },
  isLoadingVideos(state, bool) {
    state.isLoadingVideos = bool
  },
}

const store = new Vuex.Store({
  state: {
    videos: [],
    loadedVideoNum: 0,
    allowShowVideos: false,
    searchText: '',
    isFocusSearchInput: false,
    isLoadingVideos: false,
    hitVideo: false,
  },
  mutations,
  actions: {
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
  }
})

export default store