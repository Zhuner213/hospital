<template>
    <a-config-provider :locale="zhCN">
        <div class="wrap">
            <HospitalTop />
            <div class="main">
                <router-view></router-view>
            </div>
            <HospitalBottom />
        </div>
    </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>

<style scoped lang="scss">
.main {
    margin-top: 70px;
}
</style>