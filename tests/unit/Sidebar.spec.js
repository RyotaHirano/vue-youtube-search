import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Sidebar from '../../src/components/Sidebar';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Sidebar', () => {
  let getters, store;

  beforeEach(() => {
    getters = {
      getHistorySearchWords: () => ['word1', 'word2']
    };

    store = new Vuex.Store({
      getters
    });
  });

  it('renders history word', () => {
    const wrapper = shallowMount(Sidebar, {
      store,
      localVue
    });
    const list = wrapper.find('ul');
    expect(list.html()).toContain(getters.getHistorySearchWords()[0]);
    expect(list.html()).toContain(getters.getHistorySearchWords()[1]);
  });
});
