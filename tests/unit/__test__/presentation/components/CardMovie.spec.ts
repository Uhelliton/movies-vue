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
        thumb: 'fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg',
        releaseDate: '2023-06-03',
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
    expect(wrapper.props().thumb).toBe('fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg')
    expect(wrapper.text()).toContain('03-06-2023')
  })

})
