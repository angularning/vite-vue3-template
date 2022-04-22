import http from '@/service/http'
import * as T from '../types'

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return http.post('/getSmsCode', { phone });
}

/**
 * 登录
 * @param phone - 手机号
 * @param password - 密码或验证码
 */
export function fetchLogin(phone: string, password: string) {
  return http.post('/loginByCode', { phone, password: password });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return http.get('/getUserInfo');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId: string) {
  return http.post('/getUserRoutes', { userId });
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return http.post('/updateToken', { refreshToken });
}
