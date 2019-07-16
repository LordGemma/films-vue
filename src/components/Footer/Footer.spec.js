import { mount } from '@vue/test-utils'
import Footer from './Footer'
import Logo from '@/components/Logo/Logo.vue';

describe('Footer', () => {
    const wrapper = mount(Footer, {
        stubs: {
            Logo: true,
        }
    })

    it('should contain Logo component', () => {
        expect(wrapper.find(Logo).exists()).toBe(true);
    })
})