import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
// 使用piniaPersist 做pinia数据持久化，当然也可以使用如下plugin
import piniaPersist from 'pinia-plugin-persist'
// import piniaPlugin from './store/plugin' //这是今天的主角，我将它提到一个文件中

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
// pinia.use(
//   piniaPlugin({
//     key: 'pinia', // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
//     needKeepIds: ['common'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
//   })
// )
// 使用element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.use(router)
app.use(pinia)

app.mount('#app')
