import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ListView from '../../src/components/ListView';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ListView', () => {
  let store, state;

  beforeEach(() => {
    store = new Vuex.Store({
      state
    });
  });

  it('has child element', () => {
    state = {};

    const wrapper = shallowMount(ListView, {
      store,
      localVue
    });

    expect(wrapper.html()).toContain('<div class="c-list-items">');
  });

  it('not show yotutube item', () => {
    state = {};
    const wrapper = shallowMount(ListView, {
      store,
      localVue
    });

    expect(wrapper.html()).not.toContain('<div class="c-list-item">');
  });
});
