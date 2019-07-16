import { mount } from '@vue/test-utils'
import Logo from './Logo'

describe('Logo', () => {
    it('should render correctly', () => {
        const wrapper = mount(Logo)
        expect(wrapper.element).toMatchSnapshot()
    })
})