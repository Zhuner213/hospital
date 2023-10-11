<template>
    <div class="wrap">
        <HospitalTop/>
        <div class="main">
            <router-view></router-view>
        </div>
        <HospitalBottom/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
    height: 700px;
    margin-top: 70px;
}
</style>