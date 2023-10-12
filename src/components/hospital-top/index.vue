<template>
    <div class="top-wrap">
        <div class="top-content">
            <div class="letf">
                <div>logo</div>
                <div>医院系统</div>
            </div>
            <div class="right">
                <div>登陆</div>
                <div>注册</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    
</script>

<style scoped lang="scss">
    .top-wrap {
        position: fixed;
        top: 0;
        width: 100%;
        background: yellow;
        display: flex;
        justify-content: center;
        z-index: 999;

        .top-content {
            width: 1200px;
            height: 70px;
            display: flex;
            justify-content: space-between;

        }
    }
</style>