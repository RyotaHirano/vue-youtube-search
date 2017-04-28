// @flow

const mutations = {
  CLEAR_FETCH_VIDEOS(state: Object) {
    state.videos = []
  },
  UPDATE_FETCH_VIDEOS(state: Object, videos: Array<mixed>) {
    state.videos = videos
  },
  UPDATE_SEARCH_TEXT(state: Object, text: string) {
    state.searchText = text
  },
  UPDATE_LOADED_VIDEO_NUM(state: Object) {
    state.loadedVideoNum += 1
  },
  CLEAR_LOADED_VIDEO_NUM(state: Object) {
    state.loadedVideoNum = 0
  },
  UPDATE_ALLOW_SHOW_VIDEOS(state: Object, bool: boolean) {
    state.allowShowVideos = bool
  },
  UPDATE_IS_FOCUS_SEARCH_INPUT(state: Object, bool: boolean) {
    state.isFocusSearchInput = bool
  },
  UPDATE_IS_LOADING_VIDEOS(state: Object, bool: boolean) {
    state.isLoadingVideos = bool
  },
  UPDATE_HIT_VIDEO(state: Object, bool: boolean) {
    state.hitVideo = bool
  },
  UPDATE_HISTORY_SEARCH_WORDS(state: Object, word: string) {
    state.historySearchWords.push(word)
  },
  UPDATE_HISTORY_TEXT_TIMER(state: Object, timer: number) {
    state.historyTextTimer = timer
  },
  CLEAR_HISTORY_TEXT_TIMER(state: Object) {
    window.clearTimeout(state.historyTextTimer);
    state.historyTextTimer = null
  },
};

export default mutations