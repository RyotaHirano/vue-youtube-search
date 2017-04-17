// @flow
import 'whatwg-fetch'
const API_YOUTUBE_URL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict';
const API_YOUTUBE_KEY: string = 'AIzaSyD3UHH4HeY7ki2njecykZ2xMx9xToqgYNM';

export default function fetchYouTubeVideos(store: Object) {
  return fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}&q=${store.state.searchText}`)
    .then((response) => {
      // response.json() is Promise Object
      return response.json().then(data => {
        store.dispatch('resetLoaddedVideoNum');
        store.dispatch('allowShowVideos', false);
        if(data.items.length > 0) {
          store.dispatch('updateHitVideo', true);
          store.dispatch('updateFetchVideos', data.items);
        } else {
          store.dispatch('resetFetchVideos');
          store.dispatch('isLoadingVideos', false);
          store.dispatch('updateHitVideo', false);
        }
      })
    })
}