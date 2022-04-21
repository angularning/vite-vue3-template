<template>
  <div>
      11111111111111111111111111111111111111111111
    <n-button type="error" @click="handleDelete">删除</n-button>
  </div>
</template>

<script setup lang="ts">
const handleDelete = function () {
  $dialog.confirm({
    content: '确认删除？',
    confirm() {
      $dialog.success('删除成功', { positiveText: '我知道了' })
    },
    cancel() {
      $dialog.warning('已取消', { closable: true })
    },
  })
}
</script>
