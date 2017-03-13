import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: [
      {
        title: 'test1'
      },
      {
        title: 'test2'
      }
    ]
  }
})

export default store