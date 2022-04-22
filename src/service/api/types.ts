export interface ILoginParams {
  name: string | number
  password: string | number
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}
export interface ApiAuth {
  login: (params: ILoginParams) => Promise<any>
}

/** 后端返回的用户权益相关类型 */
// export declare namespace ApiAuth {
//     /** 返回的token和刷新token */
//     interface Token {
//       token: string;
//       refreshToken: string;
//     }
//   }
