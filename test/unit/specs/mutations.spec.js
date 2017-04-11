import assert from 'power-assert'
import { mutations } from '@/store'

describe('fetch mutations', () => {
  it('fetchYouTubeVideos', done => {
    const state = {
      loadedVideoNum: 1,
      allowShowVideos: true,
      videos: [],
      searchText: 'test'
    }

    mutations.fetchYouTubeVideos(state)
    done()
    assert.equal(state.loadedVideoNum, 0)
  })
})

describe('mutations', () => {
  it('updateSearchText', () => {
    const state = {
      searchText: ''
    }
    const text = 'test';
    mutations.updateSearchText(state, text)
    assert.equal(state.searchText, text)
  })

  it('updateLoadedVideoNum', () => {
    const state = {
      loadedVideoNum: 0
    };
    mutations.updateLoadedVideoNum(state)
    assert.equal(state.loadedVideoNum, 1)
  })

  it('allowShowVideos', () => {
    const state = {
      allowShowVideos: false
    }
    mutations.allowShowVideos(state, true)
    assert.equal(state.allowShowVideos, true)
  })

  it('isFocusSearchInput', () => {
    const state = {
      isFocusSearchInput: false
    }
    mutations.isFocusSearchInput(state, true)
    assert.equal(state.isFocusSearchInput, true)
  })

  it('isLoadingVideos', () => {
    const state = {
      isLoadingVideos: false
    }
    mutations.isLoadingVideos(state, true)
    assert.equal(state.isLoadingVideos, true)
  })
})