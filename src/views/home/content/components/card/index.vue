<template>
    <a-card class="card">
        <div>
            <p>枝江中心医院</p>
            <div>
                <span>三级甲等</span>
                <span>每天8:00放号</span>
            </div>
        </div>
        <div>
            <div>我是医院logo</div>
        </div>
    </a-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card {
    width: 45%;
    display: inline-block;   
    margin-right: 20px;
    margin-bottom: 20px;
    
    :deep(.ant-card-body) {
        display: flex;
        justify-content: space-between;
    }
}
</style>