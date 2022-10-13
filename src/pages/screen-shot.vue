<script setup lang="ts">
import { ref } from 'vue';
const screenshotStatus = ref<boolean>(false);
// 销毁组件函数
const destroyComponent = function(status: boolean) {
  screenshotStatus.value = status;
}
// 获取裁剪区域图片信息
const getImg = function(base64: string) {
  console.log("截图组件传递的图片信息", base64);
}
</script>

<template>
  <div>
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111
    11111111111

  </div>
  <!--截图组件-->
  <screen-short
            @destroy-component="destroyComponent"
            @get-image-data="getImg"
  ></screen-short>
</template>
