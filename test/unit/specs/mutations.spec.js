import assert from 'power-assert'
import mutations from '@/store/mutations'

// describe('fetch mutations', () => {
//   it('fetchYouTubeVideos', done => {
//     const state = {
//       loadedVideoNum: 1,
//       allowShowVideos: true,
//       videos: [],
//       searchText: 'test'
//     }
//   })
// })

describe('mutations', () => {
  it('UPDATE_SEARCH_TEXT', () => {
    const state = {
      searchText: ''
    }
    const text = 'test';
    mutations.UPDATE_SEARCH_TEXT(state, text)
    assert(state.searchText === text)
  })

  it('UPDATE_LOADED_VIDEO_NUM', () => {
    const state = {
      loadedVideoNum: 0
    };
    mutations.UPDATE_LOADED_VIDEO_NUM(state)
    assert(state.loadedVideoNum === 1)
  })

  it('UPDATE_ALLOW_SHOW_VIDEOS', () => {
    const state = {
      allowShowVideos: false
    }
    mutations.UPDATE_ALLOW_SHOW_VIDEOS(state, true)
    assert(state.allowShowVideos === true)
  })

  it('UPDATE_IS_FOCUS_SEARCH_INPUT', () => {
    const state = {
      isFocusSearchInput: false
    }
    mutations.UPDATE_IS_FOCUS_SEARCH_INPUT(state, true)
    assert(state.isFocusSearchInput === true)
  })

  it('UPDATE_IS_LOADING_VIDEOS', () => {
    const state = {
      isLoadingVideos: false
    }
    mutations.UPDATE_IS_LOADING_VIDEOS(state, true)
    assert(state.isLoadingVideos === true)
  })
})