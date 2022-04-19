<template>
  <div class="fetchList">
    {{ msg }}
    <ul>
      <li v-for="(el, i) in list" :key="i">{{ typeof el }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const prop = defineProps({
  msg: {
    type: String,
    default: () => '',
  },
})
const list = ref({
  name: 'a',
  symbol: Symbol('a'),
  age: 1,
})
</script>
