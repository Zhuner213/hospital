<template>
    <a-pagination v-model:current="current1" show-quick-jumper :total="500" @change="onChange" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const current1 = ref<number>(1);
const onChange = (pageNumber: number) => {
    console.log('Page: ', pageNumber);
};
</script>
  
  