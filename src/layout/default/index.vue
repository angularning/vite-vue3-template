<template>
  <div class="layout">
      <Header></Header>
      <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
     </router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>
