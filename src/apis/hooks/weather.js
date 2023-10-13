import { useQuery } from '@tanstack/react-query'
import { fetchWeather } from '../api'

export const useGetWeather = () => {
  return useQuery(
    ['weather'],
    () => fetchWeather()
  )
}
