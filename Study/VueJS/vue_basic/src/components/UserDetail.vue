<template>
    <div class="component">
        <h3>Information User Details</h3>
        <p>List Details</p>
        <p>My Name : {{ reverseName }}</p>
        <p>My Age: {{ age }}</p>
        <p>{{ testEventBus }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameWithCallBack">Reset Name Callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['name', 'resetNameCallBack', 'age'],
    data() {
        return {
            testEventBus: 'Đây là eventBus',
        };
    },

    computed: {
        reverseName() {
            return this.name
                .split('')
                .reverse()
                .join('');
        },
    },
    methods: {
        resetName() {
            this.$emit('resetName', 'Đặng Minh Đức');
        },
        resetNameWithCallBack() {
            this.resetNameCallBack('Đặng Minh Đức Callback');
        },
    },
    created() {
        eventBus.$on('changeEventBus', (userEdit) => {
            this.testEventBus = userEdit;
        });
    },
};
</script>

<style scoped>
.component {
    background-color: lightcoral;
}
</style>
