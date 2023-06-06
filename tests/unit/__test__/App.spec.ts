import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import SystemLayout from '@/presentation/layouts/System.vue'

describe('App', () => {
  const build = () => {
    const wrapper = mount(App)

    return {
      wrapper,
      SystemLayout: () => wrapper.findComponent(SystemLayout)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { SystemLayout } =  build()

    expect(SystemLayout().exists()).toBe(true)
  })

})
