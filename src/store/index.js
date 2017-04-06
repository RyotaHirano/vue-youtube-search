import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'

const API_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict';
const API_YOUTUBE_KEY = 'AIzaSyD3UHH4HeY7ki2njecykZ2xMx9xToqgYNM';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: [],
    loadedVideoNum: 0,
    allowShowVideos: false,
    searchText: '',
    isFocusSearchInput: false,
    isLoadingVideos: false,
  },
  mutations: {
    fetchYouTubeVideos(state) {
      fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}&q=${state.searchText}`)
        .then((response) => {
          // response.json() is Promise Object
          response.json().then(data => {
            state.loadedVideoNum = 0;
            state.allowShowVideos = false;
            return data.items.length > 0 ? state.videos = data.items : false ;
          })
        })
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
  },
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