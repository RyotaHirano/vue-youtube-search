import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'

const API_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
const API_YOUTUBE_KEY = 'AIzaSyDt1LGyISVebRRJqw7lbe5UA_9ROF48v54';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: [],
    loadedVideoNum: 0,
    allowShowVideos: false,
    searchText: ''
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
    updateSearchText(state, text) {
      state.searchText = text
    },
    updateLoadedVideoNum(state) {
      state.loadedVideoNum += 1
    },
    allowShowVideos(state) {
      state.allowShowVideos = true
    }
  },
  actions: {
    fetchYouTubeVideos({ commit }) {
      commit('fetchYouTubeVideos')
    },
    updateSearchText({ commit }, text) {
      commit('updateSearchText', text)
    },
    updateLoadedVideoNum({ commit }) {
      commit('updateLoadedVideoNum')
    },
    allowShowVideos({ commit }) {
      commit('allowShowVideos')
    }
  }
})

export default store