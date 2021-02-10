<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me</p>
        <p>My Age: {{ age }}</p>
        <button @click="editAge(40)">Change Age</button>
        <button @click="changeEventBus">Change Age Event Bus</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['age', 'editAge'],
    methods: {
        changeEventBus() {
            eventBus.$emit('changeEventBus', 'Đây là User Edit chỉnh sửa');
        },
    },
};
</script>

<style scoped>
.component {
    background-color: lightgreen;
}
</style>
