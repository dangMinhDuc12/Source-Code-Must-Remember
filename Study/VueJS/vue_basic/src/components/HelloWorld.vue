<template>
    <div>
        <h1>{{ value }}</h1>
        <button v-on:click="onClick">Click</button>
        <button v-on:click="onClick2">Check callback</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['value', 'callback'],
    methods: {
        onClick: function() {
            this.$emit('testMethod', 'hello', 'Duc2');
        },
        onClick2() {
            this.callback('Xin chao Duc');
        },
    },
};
</script>

<style scoped></style>
