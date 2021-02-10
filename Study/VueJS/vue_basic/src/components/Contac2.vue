<template>
    <div>
        <h1>This is Contact Pages {{ count }}</h1>
        <button @click="count++">Tăng</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    activated() {
        //Lifecycle cho việc chuyển đổi component bằng thẻ component và directives v-bind:is
        console.log('Đã active Contac2');
    },
    deactivated() {
        //Lifecycle cho việc chuyển đổi component bằng thẻ component và directives v-bind:is
        console.log('Đã xóa active Contac2');
    },
};
</script>

<style></style>
