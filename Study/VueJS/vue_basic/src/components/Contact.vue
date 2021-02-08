<template>
    <div>
        <h1>Contact Cpn</h1>
        <!-- <HelloWorld v-for="(value, index) in array" v-bind:value="value" v-bind:key="index" /> -->
        <!-- <HelloWorld v-on:testMethod="testMethod" /> -->
        <HelloWorld v-bind:callback="callbackMethod" />
    </div>
</template>

<script>
import HelloWorld from './HelloWorld';

export default {
    name: 'Contact',
    data: function() {
        return {
            array: ['Javavscript', 'PHP', 'Ruby'],
        };
    },
    components: {
        HelloWorld,
    },
    methods: {
        testMethod: function(child, child2) {
            console.log(child, child2);
        },
        callbackMethod: function(child) {
            console.log(child);
        },
    },
};
</script>

<style></style>
