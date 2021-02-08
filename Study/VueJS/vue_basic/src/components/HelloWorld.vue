<template>
    <div>
        <h1>{{ value }}</h1>
        <button v-on:click="onClick">Click</button>
        <button v-on:click="callback('hello Duc')">Check callback</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['value', 'callback'],
    methods: {
        onClick: function() {
            this.$emit('testMethod', 'hello', 'Duc');
        },
    },
};
</script>

<style scoped></style>
