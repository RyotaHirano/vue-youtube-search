// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


// function createList(datum) {
//   console.log(datum);
// }
//
// function deleteList() {
//   console.log('none');
// }
//
// fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}`)
//   .then((response) => {
//     // response.json() is Promise Object
//     response.json().then(data => {
//       data.items.length > 0 ? createList(data.items) : deleteList() ;
//     })
//   })