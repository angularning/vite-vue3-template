<template>
  <div></div>
  <div class="indexBg">
    <div class="commonWidth">
      <el-row :gutter="20">
        <el-col :span="2">
          <el-select v-model="plate" size="normal">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-input v-model="search" placeholder=""></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="toSearch">搜索</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
  <FetchList :msg="'a'"></FetchList>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import { watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { indexSearch } from "@/service/api/index/index";
const route = useRoute();
const search = ref("");
const plate = ref("1");
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
const toSearch = async () => {
  const data = {
    plate: plate.value,
    search: search.value,
  };
  const result = await indexSearch(data);
};
const id = route.query.id;
</script>
<style scoped lang="scss">
.indexBg {
  background: url("https://axure-file.lanhuapp.com/469a94bd-ddb1-4bd0-be20-d853b07fc697__9dcd85f052e20cb9ffae05d37613b272.png")
    no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  color: $primaryColor;
}
</style>
