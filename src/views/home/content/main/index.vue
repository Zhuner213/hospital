<template>
    <div>
        <div>医院</div>
        <List label="等级"></List>
        <List label="医院"></List>
        <Card v-for="index in 10" :key="index"></Card>
        <Pagination></Pagination>
    </div>
</template>

<script setup lang="ts">
import List from '../components/list/index.vue'
import Card from '../components/card/index.vue'
import Pagination from '../components/pagination/index.vue'
</script>

<style scoped lang="scss">

</style>