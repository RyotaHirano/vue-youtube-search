import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ListItem from '../../src/components/ListItem';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ListView', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store();
  });

  it('show movie title', () => {
    const wrapper = shallowMount(ListItem, {
      propsData: {
        video: {
          title: 'テスト動画タイトル'
        }
      },
      store,
      localVue
    });

    expect(wrapper.find('h2').text()).toEqual('テスト動画タイトル');
  });

  it('show movie content', () => {
    const wrapper = shallowMount(ListItem, {
      propsData: {
        id: 'testidtestid',
        video: {
          title: 'テスト動画タイトル'
        }
      },
      store,
      localVue
    });

    expect(wrapper.find('iframe').exists()).toBe(true);
    expect(wrapper.find('iframe').attributes('src')).toEqual(
      'https://www.youtube.com/embed/testidtestid'
    );
  });
});
