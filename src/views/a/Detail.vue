<template>
  <div class="a-detail">
    a detail
    <n-button @click="handleClick">详情页面</n-button>
    <n-pagination v-model:page="page" @change="handlePage" :page-count="100" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const page = ref(2);
const handlePage = (page: number) => {
    console.log(page);
}
const handleClick = () => {
  $message.success("成功");
//   const message = useMessage();
//   console.log(message);
//   message.success("成功");
  // MessageApi().info('跳转成功')
  //     $message.loading({
  //         content: '加载中...',
  //         duration: 1000,
  //     })
  //     $dialog.confirm({
  //     content: '确认删除？',
  //     confirm() {
  //       $dialog.success('删除成功', { positiveText: '我知道了' })
  //     },
  //     cancel() {
  //       $dialog.warning('已取消', { closable: true })
  //     },
  //   })
};
</script>
