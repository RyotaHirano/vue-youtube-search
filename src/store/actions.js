// @flow

const actions = {
  resetFetchVideos({ commit }: Object) {
    commit('CLEAR_FETCH_VIDEOS')
  },
  updateFetchVideos({ commit }: Object, videos: Array<mixed>) {
    commit('UPDATE_FETCH_VIDEOS', videos)
  },
  updateSearchText({ commit }: Object, text: string) {
    commit('UPDATE_SEARCH_TEXT', text)
  },
  updateLoadedVideoNum({ commit }: Object) {
    commit('UPDATE_LOADED_VIDEO_NUM')
  },
  resetLoaddedVideoNum({ commit }: Object) {
    commit('CLEAR_LOADED_VIDEO_NUM')
  },
  allowShowVideos({ commit }: Object, bool: boolean) {
    commit('UPDATE_ALLOW_SHOW_VIDEOS', bool)
  },
  isFocusSearchInput({ commit }: Object, bool: boolean) {
    commit('UPDATE_IS_FOCUS_SEARCH_INPUT', bool)
  },
  isLoadingVideos({ commit }: Object, bool: boolean) {
    commit('UPDATE_IS_LOADING_VIDEOS', bool)
  },
  updateHitVideo({ commit }: Object, bool: boolean) {
    commit('UPDATE_HIT_VIDEO', bool)
  },
  updateHistorySearchWords({ commit }: Object, word: string) {
    commit('UPDATE_HISTORY_SEARCH_WORDS', word)
  },
  updateHistoryTextTimer({ commit }: Object, timer: number) {
    commit('UPDATE_HISTORY_TEXT_TIMER', timer)
  },
  clearHistoryTextTimer({ commit }: Object) {
    commit('CLEAR_HISTORY_TEXT_TIMER')
  },
};

export default actions;