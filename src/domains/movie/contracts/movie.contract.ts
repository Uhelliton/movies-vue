import type { IHttpService } from '../../../infra/http/http-client'

interface MovieGenre {
  id: number
  name: number
}

export interface MovieContract {
  id: number
  adult: boolean
  original_language: 'en' | 'br'
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  vote_average: string
  vote_count: string
  genres?: Array<MovieGenre>
}

export type MoviePaginateContract = IHttpService<MovieContract>
