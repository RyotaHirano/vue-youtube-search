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
  it('updateSearchText', () => {
    const state = {
      searchText: ''
    }
    const text = 'test';
    mutations.updateSearchText(state, text)
    assert(state.searchText === text)
  })

  it('updateLoadedVideoNum', () => {
    const state = {
      loadedVideoNum: 0
    };
    mutations.updateLoadedVideoNum(state)
    assert(state.loadedVideoNum === 1)
  })

  it('allowShowVideos', () => {
    const state = {
      allowShowVideos: false
    }
    mutations.allowShowVideos(state, true)
    assert(state.allowShowVideos === true)
  })

  it('isFocusSearchInput', () => {
    const state = {
      isFocusSearchInput: false
    }
    mutations.isFocusSearchInput(state, true)
    assert(state.isFocusSearchInput === true)
  })

  it('isLoadingVideos', () => {
    const state = {
      isLoadingVideos: false
    }
    mutations.isLoadingVideos(state, true)
    assert(state.isLoadingVideos === true)
  })
})