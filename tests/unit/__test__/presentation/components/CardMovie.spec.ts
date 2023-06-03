import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CardMovie from '@/presentation/components/cards/CardMovie.vue'

describe('CardMovie', () => {
  const build = () => {
    const wrapper = mount(CardMovie,  {
      props: {
        id: 18020,
        title: 'Duna',
        description: 'Duna é um filme',
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

  it('should renders properly data: id, title, description', () => {
    const { wrapper } = build()

    expect(wrapper.props().id).toBe(18020)
    expect(wrapper.text()).toContain('Duna')
    expect(wrapper.text()).toContain('Duna é um filme')
  })

})
