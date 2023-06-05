import { HttpClient } from '@/infra/http/http-client'

class MovieHttpClient extends HttpClient {
  protected endpoint = '/movie'

  public async getMoviesBySearch(params: object) {
    const url = '/search/movie?language=pt-BR'
    return await this.get(url, params)
  }

  public async getPopular() {
    const url = this.endpoint + '/popular?language=pt-BR'
    return await this.get(url)
  }

  public async getTendencies() {
    const url = this.endpoint + '/now_playing?language=pt-BR'
    return await this.get(url)
  }

  public async getById(id: number) {
    const url = this.endpoint + `/${id}?language=pt-BR`
    return await this.get(url)
  }
}

export const MovieService = new MovieHttpClient()
