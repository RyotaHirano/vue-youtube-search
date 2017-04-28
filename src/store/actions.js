// @flow

const actions = {
  resetFetchVideos({ commit }: Object) {
    commit('resetFetchVideos')
  },
  updateFetchVideos({ commit }: Object, videos: Array<mixed>) {
    commit('updateFetchVideos', videos)
  },
  updateSearchText({ commit }: Object, text: string) {
    commit('updateSearchText', text)
  },
  updateLoadedVideoNum({ commit }: Object) {
    commit('updateLoadedVideoNum')
  },
  resetLoaddedVideoNum({ commit }: Object) {
    commit('resetLoaddedVideoNum')
  },
  allowShowVideos({ commit }: Object, bool: boolean) {
    commit('allowShowVideos', bool)
  },
  isFocusSearchInput({ commit }: Object, bool: boolean) {
    commit('isFocusSearchInput', bool)
  },
  isLoadingVideos({ commit }: Object, bool: boolean) {
    commit('isLoadingVideos', bool)
  },
  updateHitVideo({ commit }: Object, bool: boolean) {
    commit('updateHitVideo', bool)
  },
  updateHistorySearchWords({ commit }: Object, word: string) {
    commit('updateHistorySearchWords', word)
  },
  updateHistoryTextTimer({ commit }: Object, timer: number) {
    commit('updateHistoryTextTimer', timer)
  },
  clearHistoryTextTimer({ commit }: Object) {
    commit('clearHistoryTextTimer')
  },
};

export default actions;