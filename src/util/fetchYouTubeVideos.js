const API_YOUTUBE_URL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict';
const API_YOUTUBE_KEY: string = 'AIzaSyD3UHH4HeY7ki2njecykZ2xMx9xToqgYNM';

export default function fetchYouTubeVideos(state) {
  return fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}&q=${state.searchText}`)
    .then((response) => {
      // response.json() is Promise Object
      return response.json().then(data => {
        state.loadedVideoNum = 0;
        state.allowShowVideos = false;
        return data.items.length > 0 ? state.videos = data.items : false ;
      })
    })
}