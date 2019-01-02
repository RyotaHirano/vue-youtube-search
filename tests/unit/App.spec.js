import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '../../src/App';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('App', () => {
  const wrapper = shallowMount(App, {
    localVue,
    router
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h1>Vue Youtube Search</h1>');
  });
});
