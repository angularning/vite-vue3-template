// 定义一些不需要权限的api
export const NoAuthApiList: TypeNoAuthApiList = ['/login', '/register', '/logout'];
declare interface TypeNoAuthApiList {
    [x: string]: any;
    [index: number]: string;
}