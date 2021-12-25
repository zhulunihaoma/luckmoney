<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };

    return {
      count,
      loading,
      onRefresh,
    };
  },
};
</script>

<style>
</style>