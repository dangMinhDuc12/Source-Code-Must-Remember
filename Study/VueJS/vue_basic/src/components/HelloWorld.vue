<template>
    <div>
        <h1>{{ value }}</h1>
        <button v-on:click="$emit('testMethod', 'hello', 'world')">Click</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['value'],
};
</script>

<style scoped></style>
