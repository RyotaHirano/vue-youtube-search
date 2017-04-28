// @flow

import 'whatwg-fetch'
import { API_YOUTUBE_URL, API_YOUTUBE_KEY } from './index'

const actions = {
  fetchYouTubeVideos({ dispatch, state }: Object) {
    fetch(`${API_YOUTUBE_URL}&key=${API_YOUTUBE_KEY}&q=${state.searchText}`)
      .then((response) => {
        // response.json() is Promise Object
        response.json().then(data => {
          dispatch('resetLoaddedVideoNum').then(() => {
            dispatch('allowShowVideos', false).then(() => {
              if(data.items.length > 0) {
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
        })
      })
  },
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