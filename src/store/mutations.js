// @flow

const mutations = {
  CLEAR_FETCH_VIDEOS(state) {
    state.videos = [];
  },
  UPDATE_FETCH_VIDEOS(state, videos) {
    state.videos = videos;
  },
  UPDATE_SEARCH_TEXT(state, text) {
    state.searchText = text;
  },
  UPDATE_LOADED_VIDEO_NUM(state) {
    state.loadedVideoNum += 1;
  },
  CLEAR_LOADED_VIDEO_NUM(state) {
    state.loadedVideoNum = 0;
  },
  UPDATE_ALLOW_SHOW_VIDEOS(state, bool) {
    state.allowShowVideos = bool;
  },
  UPDATE_IS_FOCUS_SEARCH_INPUT(state, bool) {
    state.isFocusSearchInput = bool;
  },
  UPDATE_IS_LOADING_VIDEOS(state, bool) {
    state.isLoadingVideos = bool;
  },
  UPDATE_HIT_VIDEO(state, bool) {
    state.hitVideo = bool;
  },
  UPDATE_HISTORY_SEARCH_WORDS(state, word) {
    state.historySearchWords.push(word);
  },
  UPDATE_HISTORY_TEXT_TIMER(state, timer) {
    state.historyTextTimer = timer;
  },
  CLEAR_HISTORY_TEXT_TIMER(state) {
    window.clearTimeout(state.historyTextTimer);
    state.historyTextTimer = null;
  }
};

export default mutations;
