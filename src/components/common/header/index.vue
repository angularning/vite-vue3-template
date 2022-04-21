<template>
  <header class="header">
    <div>logo</div>
    <div>
        <n-input type="primary"></n-input>
        <n-button @click="handleDetail">跳转 index page</n-button>
        <n-button @click="handleDetailA">跳转 a page </n-button>
    </div>
    <div>
      <ul>
        <li>品类目录</Li>
        <li>价格监测</li>
        <li>数据看板</li>
        <li>价格分析</li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
const handleDetail = () => {
  router.push({
    path: '/index/detail',
    query: {
      id: route.query.id,
    },
  })
}
const handleDetailA = () => {
  router.push({
    path: '/a/detail',
    query: {
      id: route.query.id,
    },
  })
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
