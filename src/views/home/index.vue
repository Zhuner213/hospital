<template>
    <div class="wrap">
        <Carousel></Carousel>
        <Search></Search>
    </div>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
</script>

<style scoped lang="scss">
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>