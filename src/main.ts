import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
// import naive from 'naive-ui'
// import { useMessage } from 'naive-ui'

// const NMessage = useMessage()
const app = createApp(App)

app.use(router)
// app.use(naive)

app.use(createPinia())

app.mount('#app')
