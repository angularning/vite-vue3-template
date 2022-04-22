
interface Infotype {
    token: String,
    data: Object
}

export default function useAuth() {
    const userInfo = window.localStorage.getItem('userInfo')
    return userInfo;
}