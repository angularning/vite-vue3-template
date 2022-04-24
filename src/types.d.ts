interface Window {
  [propName: string]: any
}
declare type Nullable<T> = T | null
declare namespace Auth {
  /**
   * 用户角色类型(前端静态路由用角色类型进行路由权限的控制)
   * - super: 超级管理员(该权限具有所有路由数据)
   * - admin: 管理员
   * - test: 测试
   * - normal: 普通用户
   */
  type RoleType = 'super' | 'admin' | 'test' | 'normal'

  /** 用户信息 */
  interface UserInfo {
    token?: string
    code?: string
    message?: string
    headerImg?: string
    img?: string
    name?: string
    pasword?: string
    data?: User
    /** 用户角色类型 */
    userRole?: RoleType
  }
  interface User {
    userInfo: UserInfo
    headerImg?: string
    img?: string
    name?: string
    pasword?: string
  }
}
// declare namespace BMap {
//     class Map extends BMapGL.Map {}
//     class Point extends BMapGL.Point {}
//   }
  
//   declare const TMap: any;