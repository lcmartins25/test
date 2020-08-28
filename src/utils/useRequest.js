import useSWR from 'swr'
import buildUrl from './buildUrl'

export const useRequest = (query) => {
   if (!query) {
      throw new Error('Type is required')
   }

   const url = buildUrl(query)
   const { data, error } = useSWR(url)

   return { data, error }
}