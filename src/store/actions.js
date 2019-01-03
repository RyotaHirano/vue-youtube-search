import 'whatwg-fetch';
import { API_YOUTUBE_URL, API_YOUTUBE_KEY } from './index';

const actions = {
  fetchYouTubeVideos({ dispatch, state }) {
    fetch(
      `${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}&q=${state.searchText}`
    ).then(response => {
      // response.json() is Promise Object
      response.json().then(data => {
        dispatch('resetLoaddedVideoNum').then(() => {
          dispatch('allowShowVideos', false).then(() => {
            if (data.items.length > 0) {
              dispatch('updateHitVideo', true);
              dispatch('updateFetchVideos', data.items);
            } else {
              dispatch('resetFetchVideos');
              dispatch('isLoadingVideos', false);
              dispatch('updateHitVideo', false);
              dispatch('updateHistorySearchWords', state.searchText);
            }
          });
        });
      });
    });
  },
  resetFetchVideos({ commit }) {
    commit('CLEAR_FETCH_VIDEOS');
  },
  updateFetchVideos({ commit }, videos) {
    commit('UPDATE_FETCH_VIDEOS', videos);
  },
  updateSearchText({ commit }, text) {
    commit('UPDATE_SEARCH_TEXT', text);
  },
  updateLoadedVideoNum({ commit }) {
    commit('UPDATE_LOADED_VIDEO_NUM');
  },
  resetLoaddedVideoNum({ commit }) {
    commit('CLEAR_LOADED_VIDEO_NUM');
  },
  allowShowVideos({ commit }, bool) {
    commit('UPDATE_ALLOW_SHOW_VIDEOS', bool);
  },
  isFocusSearchInput({ commit }, bool) {
    commit('UPDATE_IS_FOCUS_SEARCH_INPUT', bool);
  },
  isLoadingVideos({ commit }, bool) {
    commit('UPDATE_IS_LOADING_VIDEOS', bool);
  },
  updateHitVideo({ commit }, bool) {
    commit('UPDATE_HIT_VIDEO', bool);
  },
  updateHistorySearchWords({ commit }, word) {
    commit('UPDATE_HISTORY_SEARCH_WORDS', word);
  },
  updateHistoryTextTimer({ commit }, timer) {
    commit('UPDATE_HISTORY_TEXT_TIMER', timer);
  },
  clearHistoryTextTimer({ commit }) {
    commit('CLEAR_HISTORY_TEXT_TIMER');
  }
};

export default actions;
