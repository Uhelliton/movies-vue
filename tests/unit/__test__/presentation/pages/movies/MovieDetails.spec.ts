import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import MovieDetails from '@/presentation/pages/movie/views/MovieDetails.vue'
import ShimmerDetails from '@/presentation/pages/movie/components/ShimmerDetails.vue'
import routerMovies from '@/presentation/pages/movie/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routerMovies],
})


describe('MovieDetails', () => {
  const build = () => {
    const wrapper = mount(MovieDetails, {
      global: {
        plugins: [router]
      }
    })

    return {
      wrapper,
      ShimmerDetails: () => wrapper.findComponent(ShimmerDetails)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { ShimmerDetails } =  build()

    expect(ShimmerDetails().exists()).toBe(true)
  })

})
