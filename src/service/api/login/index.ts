//login.ts
import http from '@/service/http'
import * as T from '../types'

function login(params: T.ILoginParams) {
  return http.post('/login', params)
}
export { login }
