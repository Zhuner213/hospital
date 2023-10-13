<template>
    <a-row class="content" :gutter="24">
        <a-col :span="20">
            <Main></Main>
        </a-col>
        <a-col :span="4">
            <Side></Side>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import Main from './main/index.vue'
import Side from './side/index.vue'

</script>

<style scoped lang="scss">
.content {
    width: 1200px;
}
</style>