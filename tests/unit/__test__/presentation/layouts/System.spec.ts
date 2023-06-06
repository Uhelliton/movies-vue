import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SystemLayout from '@/presentation/layouts/System.vue'
import Nav from '@/presentation/components/layouts/Nav.vue'
import Header from '@/presentation/components/layouts/Header.vue'

describe('SystemLayout', () => {
  const build = () => {
    const wrapper = mount(SystemLayout)

    return {
      wrapper,
      Nav: () => wrapper.findComponent(Nav)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { Nav } =  build()

    expect(Nav().exists()).toBe(true)
  })

})
