// @flow

const mutations = {
  resetFetchVideos(state: Object) {
    state.videos = []
  },
  updateFetchVideos(state: Object, videos: Array<mixed>) {
    state.videos = videos
  },
  updateSearchText(state: Object, text: string) {
    state.searchText = text
  },
  updateLoadedVideoNum(state: Object) {
    state.loadedVideoNum += 1
  },
  resetLoaddedVideoNum(state: Object) {
    state.loadedVideoNum = 0
  },
  allowShowVideos(state: Object, bool: boolean) {
    state.allowShowVideos = bool
  },
  isFocusSearchInput(state: Object, bool: boolean) {
    state.isFocusSearchInput = bool
  },
  isLoadingVideos(state: Object, bool: boolean) {
    state.isLoadingVideos = bool
  },
  updateHitVideo(state: Object, bool: boolean) {
    state.hitVideo = bool
  },
  updateHistorySearchWords(state: Object, word: string) {
    state.historySearchWords.push(word)
  },
  updateHistoryTextTimer(state: Object, timer: number) {
    state.historyTextTimer = timer
  },
  clearHistoryTextTimer(state: Object) {
    window.clearTimeout(state.historyTextTimer);
    state.historyTextTimer = null
  },
};

export default mutations