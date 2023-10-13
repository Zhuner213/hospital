<template>
    <div class="wrap">
        <p>{{ props.label }}：</p>
        <ul class="list">
            <li class="active">全部</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
            <li>三级甲等</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label: string
}>()
</script>

<style scoped lang="scss">
.wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    p {
        width: 65px;
    }

    .list {

        li {
            float: left;
            margin-right: 18px;
            margin-bottom: 10px;
            &.active {
                color:skyblue;
            }
        }
    }
}
</style>