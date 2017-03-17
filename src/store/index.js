import Vue from 'vue'
import Vuex from 'vuex'

const API_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
const API_YOUTUBE_KEY = 'AIzaSyDt1LGyISVebRRJqw7lbe5UA_9ROF48v54';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: []
  },
  mutations: {
    fetchYouTubeVideos(state) {
      fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}`)
        .then((response) => {
          // response.json() is Promise Object
          response.json().then(data => {
            return data.items.length > 0 ? state.videos = data.items : false ;
          })
        })
    }
  },
  actions: {
    fetchYouTubeVideos({ commit }) {
      commit('fetchYouTubeVideos')
    }
  }
})

export default store