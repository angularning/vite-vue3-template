## 项目说明
- 使用vite创建项目
- 使用vue3
## 指南
- src 目录存放源代码
- src/views 存放业务核心页面，可以按照目录名称依次新增
- main.ts 和之前的main的作用一样，挂载app，以及初始化 router，pinia等相关组件
- store 是pinia的核心目录和vuex的用法大差不差，引入了piniaPersist，做数据的持久化
- settings 一些静态配置文件，可以不使用，主要是 naive-ui的布局等全局配置。
- service 数据请求的核心文件