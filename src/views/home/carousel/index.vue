<template>
    <a-carousel>
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
    </a-carousel>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ant-carousel {
    width: 900px;
}
:deep(.slick-slide) {
    text-align: center;
    height: 260px;
    line-height: 260px;
    background: #364d79;
    overflow: hidden;
}

:deep(.slick-slide h3) {
    color: #fff;
}
</style>