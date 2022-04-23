<template>
  <div>
    <n-layout>
      <n-layout-header>header</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <img
          src="https://axure-file.lanhuapp.com/469a94bd-ddb1-4bd0-be20-d853b07fc697__9dcd85f052e20cb9ffae05d37613b272.png"
          alt=""
        />
        <n-space align="center">
          <n-select style="width: 120px;" v-model:value="plate" :options="options"></n-select>  
          <n-input v-model="search"></n-input>
          <n-button type="primary" @click="handleSearch">搜索</n-button>
        </n-space>
      </n-layout-content>
      <n-layout-footer>footer</n-layout-footer>
    </n-layout>
  </div>
  <FetchList :msg="'a'"></FetchList>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import { watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const search = ref("");
const plate = ref();
interface SearchType {
  label: String;
  value: String;
  disabled?: Boolean;
}

const options = ref([
  {
    label: "淘宝",
    value: "1",
  },
  {
    label: "京东",
    value: "2",
  },
]);
// const prop = defineProps({
//   msg: {
//     type: String,
//     default: () => '',
//   },
// })
// watch(route, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })
const handleSearch = () => {
    console.log(plate.value)
};
const id = route.query.id;
</script>
