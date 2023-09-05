import MainLayout from '@/components/MainLayout.vue';
import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils';

describe('components/MainLayout', () => {
  let wrapper: VueWrapper<InstanceType<typeof MainLayout>>;
  let element: DOMWrapper<HTMLElement>;

  beforeEach(() => {
    wrapper = mount(MainLayout, {});
    element = wrapper.find('.main-layout');
  });

  it('Should render correctly', () => {
    expect(element.exists()).toBe(true);
  });
});
