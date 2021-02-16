<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card" @click="removeItem(index)">
            <div class="card-body item">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        removeItem: Function,
        index: Number,
    },
};
</script>

<style>
.card-body {
    color: #6e6e6e;
    font-size: 24px;
}
.item {
    cursor: pointer;
}
.item:hover {
    background-color: #ffe2e2;
}
</style>
