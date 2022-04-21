<template>
  <div>indexindexindexindexindexindexindexindexindexindexindexindex</div>
  <FetchList :msg="'a'"></FetchList>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { FetchList } from '@/components'
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const prop = defineProps({
  msg: {
    type: String,
    default: () => '',
  },
})
watch(route, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
const id = route.query.id
</script>
