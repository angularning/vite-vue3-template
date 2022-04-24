<template>
  <header class="header">
    <div><el-avatar :size="50" :src="circleUrl" /></div>
    <div class="menu">
      <ul>
        <li><a>品类目录</a></li>
        <li><a>价格监测</a></li>
        <li><a>数据看板</a></li>
        <li><a>价格分析</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { useAuth } from "@/hooks";
import { useCommonStore } from "@/store/modules/common";
const router = useRouter();
const route = useRoute();
const auth = useAuth();
const search = ref(null);
const handleDetail = () => {
  router.push({
    path: "/index/detail",
    query: {
      id: route.query.id,
      search: search.value,
    },
  });
};
const commonStore = useCommonStore();
const userInfo: Auth.UserInfo = commonStore.userInfo;
const circleUrl = userInfo?.data?.userInfo?.headerImg
const handleTheme = () => {
  //   console.log(theme.themeSetting.darkMode)
  //   theme.setDarkMode(!theme.themeSetting.darkMode);
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu ul {
    display: flex;
    flex-flow: row nowrap;
    li {
      padding: 0 10px;
      color: #6a6a6a;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #ff6700;
      }
    }
  }
}
</style>
