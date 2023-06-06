import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Alert from '@/presentation/components/alert/Alert.vue'

describe('Alert', () => {
  const build = () => {
    const wrapper = mount(Alert,  {
      props: {
        message: 'error request message',
      }
    })

    return {
      wrapper
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should renders properly data: message', () => {
    const { wrapper } = build()

    expect(wrapper.props().message).toBe('error request message')
    expect(wrapper.text()).toContain('error request message')
  })

})
