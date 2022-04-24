
import http from '@/service/http'
export function indexSearch(params: any) {
  return http.post('/indexSearch', params)
}
