<template>
  <n-config-provider
    :theme-overrides="useTheme.themeSetting.naiveThemeOverrides"
    :theme="useTheme.themeSetting.darkMode ? darkTheme : null"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <naive-provider-content />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";
import { zhCN, dateZhCN, darkTheme } from "naive-ui";
import { useThemeStore } from "@/store/modules/index";

import { useLoadingBar, useDialog, useMessage, useNotification } from "naive-ui";

const useTheme = useThemeStore();


// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$dialog = useDialog();
  window.$message = useMessage();
  window.$notification = useNotification();
  const propertyList = ["$loadingBar", "$dialog", "$message", "$notification"];
  propertyList.forEach((property) => {
    Object.defineProperty(window, property, {
      writable: false,
      configurable: false,
    });
  });
}
const NaiveProviderContent = defineComponent({
  setup() {
    registerNaiveTools();
  },
  render() {
    return h("div");
  },
});
</script>
<style scoped></style>
