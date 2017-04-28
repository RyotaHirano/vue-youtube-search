const actions = {
  resetFetchVideos({ commit }) {
    commit('resetFetchVideos')
  },
  updateFetchVideos({ commit }, videos) {
    commit('updateFetchVideos', videos)
  },
  updateSearchText({ commit }, text) {
    commit('updateSearchText', text)
  },
  updateLoadedVideoNum({ commit }) {
    commit('updateLoadedVideoNum')
  },
  resetLoaddedVideoNum({ commit }) {
    commit('resetLoaddedVideoNum')
  },
  allowShowVideos({ commit }, bool) {
    commit('allowShowVideos', bool)
  },
  isFocusSearchInput({ commit }, bool) {
    commit('isFocusSearchInput', bool)
  },
  isLoadingVideos({ commit }, bool) {
    commit('isLoadingVideos', bool)
  },
  updateHitVideo({ commit }, bool) {
    commit('updateHitVideo', bool)
  },
  updateHistorySearchWords({ commit }, word) {
    commit('updateHistorySearchWords', word)
  },
  updateHistoryTextTimer({ commit }, timer) {
    commit('updateHistoryTextTimer', timer)
  },
  clearHistoryTextTimer({ commit }) {
    commit('clearHistoryTextTimer')
  },
};

export default actions;