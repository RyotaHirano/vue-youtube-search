import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch'

const API_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
const API_YOUTUBE_KEY = 'AIzaSyDt1LGyISVebRRJqw7lbe5UA_9ROF48v54';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: [],
    searchText: ''
  },
  mutations: {
    fetchYouTubeVideos(state) {
      fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}&q=${state.searchText}`)
        .then((response) => {
          // response.json() is Promise Object
          response.json().then(data => {
            return data.items.length > 0 ? state.videos = data.items : false ;
          })
        })
    },
    updateSearchText(state, text) {
      state.searchText = text
    }
  },
  actions: {
    fetchYouTubeVideos({ commit }) {
      commit('fetchYouTubeVideos')
    },
    updateSearchText({ commit }, text) {
      commit('updateSearchText', text)
    }
  }
})

export default store